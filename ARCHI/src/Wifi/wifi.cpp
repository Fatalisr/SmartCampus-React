/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include "wifi.h"

/*-----------------------------------------------------------------*/
/*                          Variables                              */
/*-----------------------------------------------------------------*/

int counter;//Compteur pour la connexion
/*  Configuration du Server */
const char* APssid = "ESP-013";
const char* APpassword = "config000";
AsyncWebServer server(80);

/*-----------------------------------------------------------------*/
/*                          Fonction                               */
/*-----------------------------------------------------------------*/

void connectedToWifi(){
    // Initialisation de la connexion avec les variables adequats
    WiFi.begin(ssid, WPA2_AUTH_PEAP, identity, username, password); 
    Serial.println("Tentative de Connexion");

    // Gestion du temps de connexion
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
        counter++;
        if(counter>=60)
        {
            Serial.println("Restart");
            ESP.restart();
        }
    }
    Serial.println("");
    Serial.print("Connected to WiFi with IP : ");
    Serial.println(WiFi.localIP());
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
void initAP() {
    WiFi.softAP(APssid, APpassword);
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
}