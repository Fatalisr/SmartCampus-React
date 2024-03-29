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

/*--------------    ---------------------------------------------------*/
/*                        Capteur de CO2                           */
/*-----------------------------------------------------------------*/

u16 ppm;
s16 err_CO2;

/*-----------------------------------------------------------------*/
/*               Capteur de temperature/humidité                   */
/*-----------------------------------------------------------------*/

float temperature;
float humidity;

/*-----------------------------------------------------------------*/
/*                              API                                */
/*-----------------------------------------------------------------*/

int APIDelay = 3600000; // Temps d'attente entre chaque envoie a l'API
String ESPCurrentRoom = "D004"; // Salle de notre SA

/*-----------------------------------------------------------------*/
/*                              WIFI                               */
/*-----------------------------------------------------------------*/

const char* ssid = "eduroam"; // Eduroam SSID

/*-----------------------------------------------------------------*/
/*                      PRIORITÉ DES TASKS                         */
/*-----------------------------------------------------------------*/

int ledTaskPriority = 1;
int screenTaskPriority = 1;
int CO2TaskPriority = 3;
int TempHumiTaskPriority = 3;
int APITaskPriority = 5;