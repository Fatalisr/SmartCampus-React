#ifndef ECRAN_H
#define ECRAN_H
/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include "../variables.h"


using namespace std;

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/

void init_screen();
void displayScreen(int x, int y, String data);
void displaySensorValue(int x, int y, String dataType, String dataUnit, float value);
void loadingDisplay(int x, int y);
void SomeoneIsThere();

void displayValuesOnScreenTask(void* parameter);

#endif
