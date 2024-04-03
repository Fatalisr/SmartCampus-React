#ifndef WIFI_H
#define WIFI_H

/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include <WiFi.h>
#include "../variables.h"
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <vector>
#include "html.h"
using namespace std;

/*  Configuration du Server */
extern const char* APssid;
extern const char* APpassword;

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/

String scanWifi();
void connectedToWifi();
void initAP();

#endif
