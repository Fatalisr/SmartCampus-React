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
	}
}

void loop() {
	delay(10000);
}