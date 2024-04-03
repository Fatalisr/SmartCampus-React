#include "html.h"
String pageHTML = "<!DOCTYPE html>"
"<html lang='fr'>"
 "<head>"
        "<meta charset='UTF-8'>"
        "<title>Byteo</title>"
        "<style>"
            "body{display: flex;width: 100%;height: fit-content;margin: 0;padding: 0;flex-direction: column;background-color: rgba(213,236,213,30%);}"
            "h1{font-size: 70px;width: 100%;text-align: center;}"
            "h2{font-size: 50px;width: 100%;text-align: left;}"
            "span{width: 60%;font-size: 50px;margin: 20px;}"
            "input, select{margin: 0 60px; height: 80px; font-size: 40px;border: solid 1px black;}"
            "option, optgroup{font-size: 25px;}"
            ".div_btn{display: flex;width: 100%;height: fit-content;justify-content: space-evenly;align-items: center;flex-direction: row;}"
            ".div_btn button{width: 30%;height: 90px;border-radius: 10px;font-size: xx-large;}"
            "#on_btn{background-color: green;}"
            "#off_btn{background-color: red;}"
            "#exitBtn{"
                "margin-top: 130px;"
                "display: flex;"
                "justify-content: center;"
                "align-items: center;"
                "width: 100%;"
                "height: 170px;}"

            "#exitBtn button{"
                "width: 50%;"
                "height: 100%;"
                "font-size: 50px;}"

            ".checkbox {"
                "width: 70px;"
                "height: 70px;"
            "}"
        "</style>"
    "</head>"
    "<body>"
        "<h1>Bienvenue sur la page de configugation de l'ESP-32</h1>"
        "<form action='/get'>"
        "<h2>Parametrage wifi :</h2>"
        "<input placeholder='SSID' name='SSID'/>"
        "<input placeholder='UserName' name='user'/>"
        "<input placeholder='Clé de sécurité wifi' name='password'/>"
        "<h2>Salle de l'esp :</h2>"
        "<select id='salle' name='salle'>"
            "<option default value='0'>Selectionner une salle</option>"
          "<optgroup label='D001 - D006'>"
            "<option value='D001'>D001</option>"
            "<option value='D002'>D002</option>"
            "<option value='D003'>D003</option>"
            "<option value='D004'>D004</option>"
            "<option value='D005'>D005</option>"
            "<option value='D006'>D006</option>"
          "</optgroup>"
          "<optgroup label='D101 - D108'>"
            "<option value='D101'>D101</option>"
            "<option value='D102'>D102</option>"
            "<option value='D103'>D103</option>"
            "<option value='D104'>D104</option>"
            "<option value='D105'>D105</option>"
            "<option value='D106'>D106</option>"
            "<option value='D107'>D107</option>"
            "<option value='D108'>D108</option>"
            "<option value='secretariat'>Secretariat</option>"
          "</optgroup>"
          "<optgroup label='D202 - D208'>"
            "<option value='D202'>D202</option>"
            "<option value='D203'>D203</option>"
            "<option value='D204'>D204</option>"
            "<option value='D205'>D205</option>"
            "<option value='D206'>D206</option>"
            "<option value='D207'>D207</option>"
            "<option value='D208'>D208</option>"
          "</optgroup>"
         "<optgroup label='D302 - D306'>"
            "<option value='D302'>D302</option>"
            "<option value='D303'>D303</option>"
            "<option value='D304'>D304</option>"
            "<option value='D305'>D305</option>"
            "<option value='D306'>D306</option>"
          "</optgroup>"
        "</select>"
        "<h2>Données à remonter :</h2>"
        "<div class='div_btn'>"
            "<span>Temperature :</span> "
            "<input class='checkbox' type='checkbox' checked name='temp'/>"
        "</div>"
        "<div class='div_btn'>"
            "<span>Humidité</span>"
             "<input class='checkbox' type='checkbox' checked name='hum'/>"
        "</div>"
        "<div class='div_btn'>"
            "<span>CO2</span>"
            "<input class='checkbox' type='checkbox' checked name='co2'/>"
        "</div>"

        "<h2>Frequence de remonté:</h2>"
        "<input placeholder='Valeur de la frequence' name='freq'/>"
        "<div id='exitBtn'>"
            "<button type='submit'>"
                "Finaliser la configuration"
            "</button>"
        "</div>"
        "</form>"
    "</body>"
"</html>";