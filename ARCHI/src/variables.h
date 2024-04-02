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
#include "Presence/presence.h"
#include "Date/date.h"

/*-----------------------------------------------------------------*/
/*                              WIFI                               */
/*-----------------------------------------------------------------*/

#define EAP_IDENTITY "ugay" //Login
#define EAP_USERNAME "ugay" //Login
#define EAP_PASSWORD "LaceulalTelephone7!" //Eduroam password
extern const char* ssid; 

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

/*-----------------------------------------------------------------*/
/*               Capteur de temperature/humidité                   */
/*-----------------------------------------------------------------*/

extern float temperature;
extern float humidity;
#define DHTPIN 7// Pin du capteur de temperature/humidité

/*-----------------------------------------------------------------*/
/*                              API                                */
/*-----------------------------------------------------------------*/

extern int APIDelay;
extern String ESPCurrentRoom;

/*-----------------------------------------------------------------*/
/*                              Presence                           */
/*-----------------------------------------------------------------*/

#define digital_pir_sensor 5 // connect to Pin 5 your motion sensor

/*-----------------------------------------------------------------*/
/*                              Ecran                              */
/*-----------------------------------------------------------------*/

extern const int screenTimeout;

/*-----------------------------------------------------------------*/
/*                              TASK                               */
/*-----------------------------------------------------------------*/

extern int ledTaskPriority;
extern int screenTaskPriority;
extern int CO2TaskPriority;
extern int TempHumiTaskPriority;
extern int APITaskPriority;

#endif
