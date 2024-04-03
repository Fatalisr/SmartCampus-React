/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

// Fichier du projet
#include "temperatureHumidite.h"

/*-----------------------------------------------------------------*/
/*                           Variables                             */
/*-----------------------------------------------------------------*/

#define DHTTYPE DHT22// DHT 22 (AM2302)
DHT_Unified dht(DHTPIN, DHTTYPE);// Instance du capteur de Hum/Temp

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/

// Initiation du capteur
void initTempHumSensor()
{
    // Initialize temperature sensor
    dht.begin();
    Serial.println("Init Hum/Temp OK");
}

void getTempValue(float & temp){
    sensors_event_t event;

    // Get temperature event and print its value.
    dht.temperature().getEvent(&event); 
    if (isnan(event.temperature)) {
        Serial.println(F("Error reading temperature!"));
        ledTempOk = false; 
    }
    else {
        temperature = event.temperature;
        ledTempOk = true; 
    }
}

// fonction de capture de l'humidité et de la temp
void getHumValue(float & hum){
    sensors_event_t event;

    // Get humidity event and print its value.
    dht.humidity().getEvent(&event);
    if(isnan(event.relative_humidity)){
        Serial.println(F("Error reading humidity!"));
        ledHumiOk = false; 
    }
    else {
        humidity = event.relative_humidity;
        ledHumiOk = true; 
    }
}

bool getValidityTemp(float & temp){

  bool tempValid = false;

  if(temperature > -20 and temperature < 60)
  {
    tempValid = true;
  }

  if(!tempValid)
  {
    getTempValue(temp);
  }

  return tempValid;
}

bool getValidityHum(float & hum)
{
  bool humValid = false;

  if(hum > 5 and hum < 99)
  {
    humValid = true;
  }

  if(!humValid)
  {
    getHumValue(hum);
  }

  return humValid;
}

/*-----------------------------------------------------------------*/
/*                             Tasks                               */
/*-----------------------------------------------------------------*/

// Capture les valeurs et incremente les variables globales correspondante
void getHumTempTask(void *parameter){
    getHumValue(humidity);
    getTempValue(temperature);
    vTaskDelay(pdMS_TO_TICKS( 20000 )); 
    for(;;){
        getHumValue(humidity);
        getTempValue(temperature);
        bool humValid = getValidityHum(humidity);
        bool tempValid = getValidityTemp(temperature);

        int retryHum = 0;
        
        while(!humValid or retryHum < 2){
            vTaskDelay( pdMS_TO_TICKS( 2000 ) );
            humValid = getValidityHum(humidity);
            retryHum += 1;
        }

        int retryTemp = 0;
        while(!tempValid or retryTemp < 2){
            vTaskDelay( pdMS_TO_TICKS( 2000 ) );
            tempValid = getValidityTemp(temperature);

            retryTemp += 1;
        }
        
        if(humValid)
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

        if(tempValid)
        {
            Serial.println("Temperature valide :");
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
        else
        {
            Serial.println("Temperature non-envoyee car la valeur n'est pas valide :");
            Serial.println(temperature);
        }
        
        vTaskDelay(pdMS_TO_TICKS( 60000 )); 
    }
}