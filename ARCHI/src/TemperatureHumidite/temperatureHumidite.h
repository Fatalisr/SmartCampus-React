#ifndef TEMPERATUREHUMIDITE_H
#define TEMPERATUREHUMIDITE_H
/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include <DHT_U.h>
#include "../variables.h"

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/

void initTempHumSensor();
void getHumValue(float & hum);
void getTempValue(float & temp);
bool getValidityTemp(float & temp);
bool getValidityHum(float & hum);


/*-----------------------------------------------------------------*/
/*                             Tasks                               */
/*-----------------------------------------------------------------*/

void getHumTempTask(void *parameter);

#endif
