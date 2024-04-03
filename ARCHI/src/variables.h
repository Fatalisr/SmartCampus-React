#ifndef VARIABLE_H
#define VARIABLE_H
/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include <Arduino.h>
#include "sensirion_common.h"
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif
#include "TemperatureHumidite/temperatureHumidite.h"
#include "Co2/co2.h"
#include "API/gestion_api.h"
#include "Wifi/wifi.h"
#include "LED/led.h"
#include "Ecran/ecran.h"
#include "Date/date.h"


/*-----------------------------------------------------------------*/
/*                              WIFI                               */
/*-----------------------------------------------------------------*/

extern String identity; //Login
extern String username; //Login
extern String password; //Eduroam password
extern String ssid; 

/* Champ du form à récup */
extern const char* PARAM_INPUT_1;
extern const char* PARAM_INPUT_2;
extern const char* PARAM_INPUT_3;
extern const char* PARAM_INPUT_4;
extern const char* PARAM_INPUT_5;
extern const char* PARAM_INPUT_6;
extern const char* PARAM_INPUT_7;
extern const char* PARAM_INPUT_8;

void setWifi(String ssid, String login, String password);

/*-----------------------------------------------------------------*/
/*                              LED                                */
/*-----------------------------------------------------------------*/

extern bool ledTempOk;
extern bool ledHumiOk;
extern bool ledCO2Ok;

/*-----------------------------------------------------------------*/
/*            Ecart par rapport au dernier envoie                  */
/*-----------------------------------------------------------------*/

extern int ecartCo2;
extern int ecartHum;
extern float ecartTemp;


/*-----------------------------------------------------------------*/
/*               Moyenne glissante des donnée                      */
/*-----------------------------------------------------------------*/


extern float sommeCo2;
extern float sommeHum;
extern float sommeTemp;


extern int compteurCo2;
extern int compteurHum;
extern int compteurTemp;

/*-----------------------------------------------------------------*/
/*               Dernière donnée envoyé à l'API                    */
/*-----------------------------------------------------------------*/

extern u16 ppmEnvoye;
extern float temperatureEnvoye;
extern float humidityEnvoye;

/*-----------------------------------------------------------------*/
/*                                   date                          */
/*-----------------------------------------------------------------*/

extern char * date;

/*-----------------------------------------------------------------*/
/*                        Capteur de CO2                           */
/*-----------------------------------------------------------------*/

extern u16 ppm;
extern s16 err_CO2;
extern bool sendCO2;
 
void setSendCO2(bool value);

/*-----------------------------------------------------------------*/
/*               Capteur de temperature/humidité                   */
/*-----------------------------------------------------------------*/

extern float temperature;
extern float humidity;
#define DHTPIN 7// Pin du capteur de temperature/humidité

extern bool sendTemperature;
extern bool sendHumidity;

void setSendTemperature(bool value);
void setSendHumidity(bool value);

/*-----------------------------------------------------------------*/
/*                              API                                */
/*-----------------------------------------------------------------*/

extern int APIDelay;
extern String ESPCurrentRoom;

void setAPIDelay(int returnFrequence);
void setESPCurrentRoom(String currentRoom);

/*-----------------------------------------------------------------*/
/*                              TASK                               */
/*-----------------------------------------------------------------*/

extern int ledTaskPriority;
extern int screenTaskPriority;
extern int CO2TaskPriority;
extern int TempHumiTaskPriority;
extern int APITaskPriority;

#endif
