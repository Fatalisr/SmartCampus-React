#ifndef GESTION_API_H
#define GESTION_API_H
/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include <HTTPClient.h>
#include <ArduinoJson.h>

// Fichiers du projet
#include "../variables.h"

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/

void sendToApi();


void sendToApiTemp();
void sendToApiCo2();
void sendToApiHum();

/*
* @brief create the json object
*/
template <typename t>
String convertTOJson(t value, String type);

/*
 * Initializes the clock
 * 
 */
void initClock();

/*
* @brief get a char * reprsenting the date
*/
char * getDate();

/*-----------------------------------------------------------------*/
/*                             Tasks                               */
/*-----------------------------------------------------------------*/

void sendToAPITask(void *parameter);

#endif