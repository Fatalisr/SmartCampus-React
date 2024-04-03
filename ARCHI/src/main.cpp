#include <Arduino.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <vector>
#include "html.h"
#include "variables.h"
using namespace std;

bool isConfig = false; // Booleen pour lancer le mode config ou non
/* Config Button */
const int PushButton1 = 18;
const int PushButton2 = 19;
bool state1;
bool state2;

/*  Configuration du Server */
const char* APssid = "ESP-013";
const char* APpassword = "config000";
AsyncWebServer server(80);
/* Champ du form à récup */
const char* PARAM_INPUT_1 = "SSID";
const char* PARAM_INPUT_2 = "user";
const char* PARAM_INPUT_3 = "password";
const char* PARAM_INPUT_4 = "salle";
const char* PARAM_INPUT_5 = "temp";
const char* PARAM_INPUT_6 = "hum";
const char* PARAM_INPUT_7 = "co2";
const char* PARAM_INPUT_8 = "freq";

void setup() {
  	Serial.begin(9600);
	delay(2000);
	if(isConfig) {
		Serial.println("MODE CONFIG");
		WiFi.softAP(APssid, APpassword);
		Serial.println(WiFi.softAPIP());
		server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){request->send_P(200, "text/html", pageHTML.c_str());});
		server.begin();
		server.on("/get", HTTP_GET, [] (AsyncWebServerRequest *request) {
			// GET value on <ESP_IP>/get?name=<value>
			if (request->hasParam(PARAM_INPUT_1) && request->hasParam(PARAM_INPUT_2) && request->hasParam(PARAM_INPUT_3)) {
				setWifi(request->getParam(PARAM_INPUT_1)->value(),request->getParam(PARAM_INPUT_2)->value(),request->getParam(PARAM_INPUT_3)->value());
			}
			if (request->hasParam(PARAM_INPUT_4)) {
				setESPCurrentRoom(request->getParam(PARAM_INPUT_4)->value());
			}
			// Gestion de l'envoi de la temperature
			if (request->hasParam(PARAM_INPUT_5)) {
				setSendTemperature(true);
			}else{
				setSendTemperature(false);
			}
			// Gestion de l'envoi de l'humidité
			if (request->hasParam(PARAM_INPUT_6)) {
				setSendHumidity(true);
			}else{
				setSendHumidity(false);
			}
			// Gestion de l'envoi du CO2
			if (request->hasParam(PARAM_INPUT_7)) {
				setSendCO2(true);
			}else{
				setSendCO2(false);
			}

			if (request->hasParam(PARAM_INPUT_8)) {
				setAPIDelay(atoi(request->getParam(PARAM_INPUT_8)->value().c_str()));
			}
			request->send(200, "text/html", "HTTP GET request sent to your ESP <br><a href=\"/\">Return to Home Page</a>");
		});
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

String scanWifi() {
	// WiFi.scanNetworks will return the number of networks found
	int n = WiFi.scanNetworks();
	vector<String> SSIDs;
	String lines = "";
	if (n > 0) {
		for (int i = 0; i < n; ++i) {
			// Print SSID and RSSI for each network found
			SSIDs.push_back(WiFi.SSID(i));
		}
	}
	for (int i = 0; i < n; ++i) {
		String line = "<option value='"+SSIDs[i]+"'>"+SSIDs[i]+"</option>";
		lines += line;
	}
	String dropDownStart = "<form action='/get'>SSID: <select name='SSID' id='SSID'>";
	String dropDownEnd = "</select></br>Identifiant: <input type='text' name='user'></br>Mot de passe: <input type='text' name='password'></br><input type='submit' value='submit'></form>";
	return dropDownStart+lines+dropDownEnd;
}