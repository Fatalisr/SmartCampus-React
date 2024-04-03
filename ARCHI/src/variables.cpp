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
/*               Moyenne glissante des donnée                      */
/*-----------------------------------------------------------------*/

float sommeCo2 = 0;
float sommeHum = 0;
float sommeTemp = 0;

int compteurCo2 = 0;
int compteurHum = 0;
int compteurTemp = 0;

/*-----------------------------------------------------------------*/
/*               Dernière donnée envoyé à l'API                    */
/*-----------------------------------------------------------------*/

 u16 ppmEnvoye;
 float temperatureEnvoye;
 float humidityEnvoye;

/*-----------------------------------------------------------------*/
/*            Ecart par rapport au dernier envoie                  */
/*-----------------------------------------------------------------*/

int ecartCo2 = 100;
int ecartHum = 2;
float ecartTemp = 0.3;

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
/*                                   date                          */
/*-----------------------------------------------------------------*/

char * date = (char*)malloc(20);

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

String ssid = "eduroam"; //SSID
String identity = "ugay"; //Login
String username = "ugay"; //Login
String password = "LaceulalTelephone7!"; // Password

void setWifi(String newSSID, String newLogin,String newPassword){
    ssid = newSSID;
    identity = newLogin;
    username = newLogin;
    password = newPassword;
}

/* Champ du form à récup */
const char* PARAM_INPUT_1 = "SSID";
const char* PARAM_INPUT_2 = "user";
const char* PARAM_INPUT_3 = "password";
const char* PARAM_INPUT_4 = "salle";
const char* PARAM_INPUT_5 = "temp";
const char* PARAM_INPUT_6 = "hum";
const char* PARAM_INPUT_7 = "co2";
const char* PARAM_INPUT_8 = "freq";

/*-----------------------------------------------------------------*/
/*                              Ecran                              */
/*-----------------------------------------------------------------*/

const int screenTimeout = 60000;

/*-----------------------------------------------------------------*/
/*                      PRIORITÉ DES TASKS                         */
/*-----------------------------------------------------------------*/

int ledTaskPriority = 1;
int screenTaskPriority = 1;
int CO2TaskPriority = 3;
int TempHumiTaskPriority = 3;
int APITaskPriority = 5;
