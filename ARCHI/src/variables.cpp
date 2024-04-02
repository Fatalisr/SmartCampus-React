/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include "variables.h"

/*-----------------------------------------------------------------*/
/*                              LED                                */
/*-----------------------------------------------------------------*/

/*
* Booleen permettant de gerer la couleur de la led
* Orange = initialisation de l'esp
* Vert = DATA OK
* Rouge = Probleme
*/ 
bool ledTempOk = true;
bool ledHumiOk = true;
bool ledCO2Ok = true;

/*-----------------------------------------------------------------*/
/*                        Capteur de CO2                           */
/*-----------------------------------------------------------------*/

u16 ppm;
s16 err_CO2;
bool sendCO2 = true;

void setSendCO2(bool value){
    sendCO2 = value;
}

/*-----------------------------------------------------------------*/
/*               Capteur de temperature/humidité                   */
/*-----------------------------------------------------------------*/

float temperature;
float humidity;

bool sendTemperature = true;
bool sendHumidity = true;

void setSendTemperature(bool value){
    sendTemperature = value;
}
void setSendHumidity(bool value){
    sendHumidity = value;
}

/*-----------------------------------------------------------------*/
/*                              API                                */
/*-----------------------------------------------------------------*/

int APIDelay = 300000; // Temps d'attente entre chaque envoie a l'API
String ESPCurrentRoom = "D004"; // Salle de notre SA

void setAPIDelay(int returnFrequence){
    APIDelay = returnFrequence;
}

void setESPCurrentRoom(String currentRoom){
    ESPCurrentRoom = currentRoom;
}


/*-----------------------------------------------------------------*/
/*                              WIFI                               */
/*-----------------------------------------------------------------*/
char* convertTest(String test) {
    char * retour = "";
    for(int i = 0 ; i < test.length() ; i++){
        retour = retour + test[i];
    }
    return retour;
}

String ssid = ""; // Eduroam SSID
String EAP_IDENTITY = "ugay"; //Login
String EAP_USERNAME = "ugay"; //Login
String EAP_PASSWORD = "LaceulalTelephone7!"; //Eduroam password

void setWifi(String newSSID, String login,String password){
    ssid = newSSID;
    EAP_IDENTITY = login;
    EAP_USERNAME = login;
    EAP_PASSWORD = password;
}


/*-----------------------------------------------------------------*/
/*                      PRIORITÉ DES TASKS                         */
/*-----------------------------------------------------------------*/

int ledTaskPriority = 1;
int screenTaskPriority = 1;
int CO2TaskPriority = 3;
int TempHumiTaskPriority = 3;
int APITaskPriority = 5;