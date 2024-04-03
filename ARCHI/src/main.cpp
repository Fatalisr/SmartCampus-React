#include <Arduino.h>
#include "variables.h"

bool isConfig = true; // Booleen pour lancer le mode config ou non

void setup() {
  	Serial.begin(9600);
	delay(2000);
	if(isConfig) {
		initAP();
	} else {
		Serial.println("MODE NORMAL");
		// Connection au wifi 
		connectedToWifi();

		// Initialisation des differents composants
		initLed(); 
		initClock();
		initCO2Sensor();
		initTempHumSensor();
		init_screen();
		initPresence();

		Serial.println("End of Setup");

		/*-----------------------------------------------------------------*/
		/*                               TASKS                             */
		/*-----------------------------------------------------------------*/
		xTaskCreate(setLedColorTask, "couleur de led", 10000, NULL, ledTaskPriority, NULL);
		xTaskCreate(getCO2Task, "capture du CO2", 10000, NULL,CO2TaskPriority, NULL);
		xTaskCreate(getHumTempTask, "capture temp et humi", 10000, NULL, TempHumiTaskPriority, NULL);
		xTaskCreate(sendToAPITask, "envoie à l'api", 10000, NULL, APITaskPriority, NULL);
	}
}

void loop()
{
    SomeoneIsThere();
}
