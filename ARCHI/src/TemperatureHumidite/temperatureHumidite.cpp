/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include "temperatureHumidite.h"

/*-----------------------------------------------------------------*/
/*                           Variables                             */
/*-----------------------------------------------------------------*/

#define DHTTYPE DHT22// DHT 22 (AM2302)
DHT_Unified dht(DHTPIN, DHTTYPE);// Instance du capteur de Hum/Temp

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/

/*
 * Fonction initTempHumSensor() : initialise le capteur DHT
 * Appel la fonction begin du capteur et confirme le bon déroulement de l'initialisation
 */
void initTempHumSensor()
{
    // Initialize temperature sensor
    dht.begin();
    Serial.println("Init Hum/Temp OK");
}

/*
 * Fonction getTempValue(float & temp) : Récupère la température captée par le DHT et l'attribue au paramètre temp passé en référence
 * La fonction ne renvoie aucune valeur.
 */
void getTempValue(float & temp){
    
    // Evènement associé au capteur
    sensors_event_t event;

    // Récupère l'évènement
    dht.temperature().getEvent(&event);
    // Vérification de la valeur contenue par l'évènement (Si l'évènement ne contient pas de température, on prévient qu'il y a une erreur)
    if (isnan(event.temperature)) {
        Serial.println(F("Error reading temperature!"));
        ledTempOk = false; 
    }
    // L'évènement contient une température
    else {
        temperature = event.temperature; // On stocke la valeur récupérée par l'évènement dans la variable temperature (déclarée dans /src/variables.h)
        ledTempOk = true; 
    }
}

/*
 * Fonction getHumValue(float & hum) : Récupère l'humidité captée par le DHT et l'attribue au paramètre hum passé en référence
 * La fonction ne renvoie aucune valeur.
 */
void getHumValue(float & hum){
    
    // Evènement associé au capteur
    sensors_event_t event;

    // Récupère l'évènement
    dht.humidity().getEvent(&event);
    // Vérification de la valeur contenue par l'évènement (Si l'évènement ne contient pas de valeur d'humidité, on prévient qu'il y a une erreur)
    if(isnan(event.relative_humidity)){
        Serial.println(F("Error reading humidity!"));
        ledHumiOk = false; 
    }
    // L'évènement contient une donnée d'humidité
    else {
        humidity = event.relative_humidity; // On stocke la valeur récupérée par l'évènement dans la variable humidity (déclarée dans /src/variables.h)
        ledHumiOk = true; 
    }
}

/*
 * Fonction getValidityTemp(float & temp) : Vérifie la validité de la température passée en paramètre. Si elle n'est pas valide, on retente de récupérer une nouvelle valeur.
 * Renvoie un booléen tempValid (false si la donnée n'est pas valide, true si elle l'est)
 * Une température est valide si elle est située entre -20 et 60°C.
 * param temp : température dont on vérifie la validité. Passé par référence, sa valeur est modifié lorsque l'on récupère une nouvelle valeur de température.
 */
bool getValidityTemp(float & temp){

  // Booléen attestant de la validité de la température
  bool tempValid = false;
  
  // La température stockée dans temp est valide
  if(temperature > -20 and temperature < 60)
  {
    tempValid = true;
  }
  
  // La température n'est pas valide ...
  if(!tempValid)
  {
    getTempValue(temp); // ... on récupère une nouvelle valeur.
  }

  return tempValid;
}

/*
 * Fonction getValidityHum(float & hum) : Vérifie la validité de l'humidité passée en paramètre. Si elle n'est pas valide, on retente de récupérer une nouvelle valeur.
 * Renvoie un booléen humValid (false si la donnée n'est pas valide, true si elle l'est)
 * Une donnée d'humidité est valide si elle est située entre 5 et 99%.
 * param hum : donnée d'humidité dont on vérifie la validité. Passé par référence, sa valeur est modifié lorsque l'on récupère une nouvelle valeur d'humidité.
 */
bool getValidityHum(float & hum)
{
  // Booléen attestant de la validité de l'humidité
  bool humValid = false;
  
  // L'humidité stockée dans hum est valide
  if(hum > 5 and hum < 99)
  {
    humValid = true;
  }
  
  // La donnée n'est pas valide ...
  if(!humValid)
  {
    getHumValue(hum); // ... on récupère une nouvelle valeur.
  }

  return humValid;
}

/*-----------------------------------------------------------------*/
/*                             Tasks                               */
/*-----------------------------------------------------------------*/

// Capture les valeurs et incremente les variables globales correspondante
void getHumTempTask(void *parameter){

    for(;;){
        // Première récupération de l'humidité et de la température
        getHumValue(humidity);
        getTempValue(temperature);

        //============================================//
        //           Validité de la donnéee           //
        //============================================//

        // On vérifie une première fois la validité des données, qui sera stockée dans les variable humValid et tempValid
        bool humValid = getValidityHum(humidity);
        bool tempValid = getValidityTemp(temperature);

        // Si la valeur d'humidité est incorrecte, on réessaye de capter une donnée correcte
        // Tant que la donnée n'est pas valide et que le nombre de tentative ne dépasse pas le nombre de tentatives de rectification de la donnée fixé
        int retryHum = 0;
        while(!humValid or retryHum < 2){
            vTaskDelay( pdMS_TO_TICKS( 2000 ) );  // On attend 2 secondes avant de récupérer une nouvelle donnée
            humValid = getValidityHum(humidity);  // On vérifie à nouveau la validité
            retryHum += 1;                        // On incrémente le nombre de tentatives effectuées
        }

        // Même chose pour la température
        int retryTemp = 0;
        while(!tempValid or retryTemp < 2){
            vTaskDelay( pdMS_TO_TICKS( 2000 ) );
            tempValid = getValidityTemp(temperature);
            retryTemp += 1;
        }
        
        //===========================================//
        //     Envoi et persistence de la donnée     //
        //===========================================//

        if(humValid)    // La donnée d'humidité est valide
        {
            compteurHum += 1;
            sommeHum += humidity;
            Serial.println("Humidite valide :");
            Serial.println(humidity);

            if(humidity < humidityEnvoye - ecartHum or humidity > humidityEnvoye + ecartHum)
            {
                humidityEnvoye = humidity;
                sendToApiHum();
                sommeHum = 0;
                compteurHum = 0;
            }
            else
            {
                Serial.println("Humidite : Ecart trop faible avec valeur precedente, la capture n'a pas ete envoyee");
            }
        }
        else
        {
            Serial.println("Humitide non-envoyee car la valeur n'est pas valide :");
            Serial.println(humidity);
        }

        if(tempValid)   // La donnée de température est valide
        {
            Serial.println("Temperature valide");
            Serial.println(temperature);
            compteurTemp += 1;
            sommeTemp += temperature;
            if(temperature < temperatureEnvoye - ecartTemp or temperature > temperatureEnvoye + ecartTemp)
            {
                temperatureEnvoye = temperature;
                sendToApiTemp();
                sommeTemp = 0;
                compteurTemp = 0;
            }
            else
            {
                Serial.println("Temperature : Ecart trop faible avec valeur precedente, la capture n'a pas ete envoyee");
            }
        }
        else    // La donnée de température n'est pas valide
        {
            Serial.println("Temperature non-envoyee car la valeur n'est pas valide :");
            Serial.println(temperature);
        }
        
        vTaskDelay(pdMS_TO_TICKS( 60000 )); 
    }
}