/*-----------------------------------------------------------------*/
/*                            Include                              */
/*-----------------------------------------------------------------*/

#include "ecran.h"

/*-----------------------------------------------------------------*/
/*                           Variable                              */
/*-----------------------------------------------------------------*/

#include <Wire.h>               // Only needed for Arduino 1.6.5 and earlier
#include "SSD1306Wire.h"        // legacy: #include "SSD1306.h"

SSD1306Wire display(0x3c, SDA, SCL);

/*-----------------------------------------------------------------*/
/*                           Fonctions                             */
/*-----------------------------------------------------------------*/


void init_screen() {
  // Initialising the UI will init the display too.
  
  display.init();
  display.flipScreenVertically();
  display.setFont(ArialMT_Plain_10);
}


// Affichage standard 
void displayScreen(int x, int y, String data){
  const char * printedData = data.c_str();
  display.drawStringMaxWidth(x, y, 128,printedData);                      
}


void displaySensorValue(int x, int y, String dataType, String dataUnit, float value)
{ 
  // Conversion de la valeur float en string pour l'affichage (precision au dixième)
  String stringValue = String(value);                            
  stringValue.remove(stringValue.length()-1);
  String stringData = dataType + " : " +stringValue+" "+dataUnit;   
  const char * printedData = stringData.c_str();                   
  display.drawStringMaxWidth(x, y, 128,printedData);                      
}


void loadingDisplay(int x, int y){
  
  display.setFont(ArialMT_Plain_10);
  display.setTextAlignment(TEXT_ALIGN_LEFT);
  display.clear();
  display.drawStringMaxWidth(x, y, 128,"Chargement");
  display.display();
  delay(500);
  display.clear();
  display.drawStringMaxWidth(x, y, 128,"Chargement .");
  display.display();
  delay(500);
  display.clear();
  display.drawStringMaxWidth(x, y, 128,"Chargement ..");
  display.display();
  delay(500);
  display.clear();
  display.display();
  display.drawStringMaxWidth(x, y, 128,"Chargement ...");
  delay(500);
}

void SomeoneIsThere(){
  if (get_Motion_value()) { // Si le capteur de présence détecte une présence
    display.displayOn(); // Allumer l'écran

    TaskHandle_t displayTaskHandle; // Déclaration de la variable pour stocker le handle de la tâche

    // Création de la tâche pour afficher les valeurs sur l'écran
    xTaskCreate(&displayValuesOnScreenTask, "affichage a l'écran", 10000, NULL, screenTaskPriority, &displayTaskHandle);

    delay(screenTimeout); // Attendre pendant la durée de temporisation définie

    display.displayOff(); // Éteindre l'écran
    vTaskDelete(displayTaskHandle); // Supprimer la tâche
  }
}

/*-----------------------------------------------------------------*/
/*                             Tasks                               */
/*-----------------------------------------------------------------*/
void displayValuesOnScreenTask(void* parameter){
  
  loadingDisplay(10, 40);
  for(;;){
    display.clear();
    getDate();
    displayScreen(10, 10,date);
    displaySensorValue(10, 28, "Temperature", "°C", temperature);
    displaySensorValue(10, 40, "Humidité", "%", humidity);
    displaySensorValue(10, 52, "CO2", "ppm", ppm);
    display.display();
    vTaskDelay( pdMS_TO_TICKS( 2000 ) );
  }
}