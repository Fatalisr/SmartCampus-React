/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include "presence.h"

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/

void initPresence()
{
  pinMode(digital_pir_sensor, INPUT);
}

bool get_Motion_value()
{
  return digitalRead(digital_pir_sensor); // return 1 if a motion is detected return 0 else
}
