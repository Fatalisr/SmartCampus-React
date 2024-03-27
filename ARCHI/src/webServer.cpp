#include <Arduino.h>
//#include <ESPAsyncWebServer.h>
#include <AsyncTCP.h>
#include <Preferences.h>
#include <ESPAsyncWebServer.h>
#include <vector>
using namespace std;

/* Config preferences */
String ssidSave;
String passwordSave;
Preferences preferences;
void setupPref(String ssid, String user, String password) {
	String ssidSave = preferences.getString("ssid", "");
	String userSave = preferences.getString("user", "");
  	String passwordSave = preferences.getString("password", "");
	if (ssidSave == "" || passwordSave == "" || passwordSave == ""){
		Serial.println("No values saved for ssid or password");
		preferences.begin("credentials", false);
		preferences.putString("ssid","def");
		preferences.putString("user","def");
		preferences.putString("password","def");
		preferences.end();
  	}

}
void writerPref(String key, String value) {
	preferences.begin("credentials", false);
	const char* k = key.c_str();
	const char* v = value.c_str();
	preferences.putString(k,v);
	preferences.end();
}

/*  Configuration du Server */
const char* ssid = "ESP-013";
const char* password = "config000";
AsyncWebServer server(80);
/* Champ du form à récup */
const char* PARAM_INPUT_1 = "SSID";
const char* PARAM_INPUT_2 = "user";
const char* PARAM_INPUT_3 = "password";

/* Page a afficher */
String head = "<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'><title>Byteo</title><meta name='viewport' content='width=device-width, initial-scale=1'></head>";
String style = "";
String body = "<h1>Bienvenue sur la page de configugation de l'ESP-32</h1>";
String dropDownStart = "<form action='/get'>SSID: <select name='SSID' id='SSID'>";
String dropDownEnd = "</select></br>Identifiant: <input type='text' name='user'></br>Mot de passe: <input type='text' name='password'></br><input type='submit' value='submit'></form>";
String page = head+"<body>"+body;


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

void setup() {
  	Serial.begin(9600);
	delay(2000);
	WiFi.softAP(ssid, password);
	page += scanWifi()+"</body></html>";
	setupPref("","","");
	preferences.begin("credentials", false);
	IPAddress IP = WiFi.softAPIP();
	Serial.print("Adresse IP du serveur : ");
	Serial.println(IP);
	server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
	request->send_P(200, "text/html", (page.c_str()));
	});
	server.begin();

	/*               */
	// Send a GET
	server.on("/get", HTTP_GET, [] (AsyncWebServerRequest *request) {
		String inputSSID;
		String inputUser;
		String inputPASSWD;
		// GET SSID value on <ESP_IP>/get?SSID=<inputMessage>
		if (request->hasParam(PARAM_INPUT_1)) {
			inputSSID = request->getParam(PARAM_INPUT_1)->value();
			writerPref(PARAM_INPUT_1,inputSSID);
		}
		// GET user value on <ESP_IP>/get?user=<inputMessage>
		if (request->hasParam(PARAM_INPUT_2)) {
			inputUser = request->getParam(PARAM_INPUT_2)->value();
			writerPref(PARAM_INPUT_2,inputUser);
		}
		// GET input3 value on <ESP_IP>/get?input3=<inputMessage>
		if (request->hasParam(PARAM_INPUT_3)) {
			inputPASSWD = request->getParam(PARAM_INPUT_3)->value();
			writerPref(PARAM_INPUT_3,inputPASSWD);
		}
		else {
		}
		request->send(200, "text/html", "HTTP GET request sent to your ESP with value: " + inputSSID + " " + inputUser + " " + inputPASSWD + " "
											"<br><a href=\"/\">Return to Home Page</a>");
	});

	preferences.end();
}

void loop() {
	delay(10000);
}