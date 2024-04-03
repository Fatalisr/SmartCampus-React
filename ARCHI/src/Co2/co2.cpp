/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include "co2.h"

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/

/*
 * Fonction initCO2Sensor() : initialise le capteur de CO2 SGP30 conformément à l'exemple
 */
void initCO2Sensor()
{
  s16 err;
  u16 scaled_ethanol_signal, scaled_h2_signal;
  while (sgp_probe() != STATUS_OK)
  {
    Serial.println("Erreur de l'initialisation du Capteur C02");
    ledCO2Ok = false; 
    while(1);
  }
  /* Read H2 and Ethanol signal in the way of blocking */
  err = sgp_measure_signals_blocking_read(&scaled_ethanol_signal,&scaled_h2_signal);
  if (err == STATUS_OK)
  {
    Serial.println("get ram signal!");
  }
  else
  {
    Serial.println("Erreur de lecture du capteur de CO2");
    ledCO2Ok = false; 
  }
  err = sgp_iaq_init();
  Serial.println("Init CO2 OK");
  ledCO2Ok = true;
}

/*
 * Fonction getCO2Value(u16 &ppm) : Récupère le taux de CO2 captée par le SGP30 et l'attribue au paramètre ppm passé en référence.
 * La fonction ne renvoie aucune valeur.
 */
s16 getCO2Value(u16 &ppm)
{
  s16 err = 0;
  u16 scaled_ethanol_signal, scaled_h2_signal;

  if (sgp_measure_signals_blocking_read(&scaled_ethanol_signal,&scaled_h2_signal) == STATUS_OK){
    ledCO2Ok = true; 
  }
  else{
    ledCO2Ok = false; 
  }

  err = sgp_measure_co2_eq_blocking_read(&ppm);
  return err;
}

/*
 * Fonction getValidityCO2(u16 &ppm) : Vérifie la validité du taux de CO2 passé en paramètre. Si elle n'est pas valide, on retente de récupérer une nouvelle valeur.
 * Renvoie un booléen (false si la donnée n'est pas valide, true si elle l'est)
 * Un taux de CO2 est valide s'il est situé entre 400 et 5000 ppm.
 * param ppm : taux de CO2 dont on vérifie la validité. Passé par référence, sa valeur est modifié lorsque l'on récupère une nouvelle valeur.
 */
bool getValidityCO2(u16 &ppm)
{
  if(ppm >= 400 or ppm < 5000)
  {
    return true;
  }
  else
  {
    err_CO2 = getCO2Value(ppm);
    return false;
  }
}

/*-----------------------------------------------------------------*/
/*                             Tasks                               */
/*-----------------------------------------------------------------*/

// Tache de lecture du CO2
void getCO2Task(void *parameter){
    err_CO2 = getCO2Value(ppm);
    for(;;){
        err_CO2 = getCO2Value(ppm);
        
        //============================================//
        //           Validité de la donnéee           //
        //============================================//

        // Si la valeur d'humidité est incorrecte, on réessaye de capter une donnée correcte
        // Tant que la donnée n'est pas valide et que le nombre de tentative ne dépasse pas le nombre de tentatives de rectification de la donnée fixé
        int retryCO2 = 0;
        while(!getValidityCO2(ppm) and retryCO2 < 2){
          
          vTaskDelay( pdMS_TO_TICKS( 2000 ) );
          
          retryCO2 += 1;
          Serial.println("CO2 : Valeur invalide, on réessaye. Essai :");
          Serial.println(retryCO2);
          Serial.println(ppm);
        }


        //===========================================//
        //     Envoi et persistence de la donnée     //
        //===========================================//
        
        if(getValidityCO2(ppm))  // La donnée est valide
        {
          compteurCo2 += 1;
          sommeCo2 += ppm;
          Serial.println("CO2 valide :");
          Serial.println(ppm);
          if(ppm < ppmEnvoye - ecartCo2 or ppm > ppmEnvoye + ecartCo2)  // On regarde l'écart avec la valeur précédente par rapport à la dernière valeur récupérée 
          {
            ppmEnvoye = ppm;
            sendToApiCo2();
            sommeCo2 = 0;
            compteurCo2 = 0;
          }
          else
          {
            Serial.println("CO2 : Ecart trop faible avec valeur precedente, la capture n'a pas ete envoyee");
          }
        }
        else  // La donnée n'est pas valide
        {
          Serial.println("CO2 non-envoyé car la valeur n'est pas valide :");
          Serial.println(ppm);
        }
        vTaskDelay( pdMS_TO_TICKS( 60000 ) ); // On attend une minute avant la prochaine capture
    }
}