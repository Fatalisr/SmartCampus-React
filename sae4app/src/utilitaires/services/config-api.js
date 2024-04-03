/*
 * config-api.js : fichier contenant l'ensemble des variables nécessaires au bon fonctionnement des appels aux API
 */

/*
 * URL de l'API Capture
 */
export const baseUrlApiCapture = 'https://sae34.k8s.iut-larochelle.fr'

/*
 * Map stockant les correspondances entre le nom de salles et le nom des bases de données de l'API Capture
 */
export const roomsDatabase = {
  "D205" : "sae34bdk1eq1",
  "D206" : "sae34bdk1eq2",
  "D207" : "sae34bdk1eq3",
  "D204" : "sae34bdk2eq1",
  "D203" : "sae34bdk2eq2",
  "D303" : "sae34bdk2eq3",
  "D304" : "sae34bdl1eq1",
  "C101" : "sae34bdl1eq2",
  "D109" : "sae34bdl1eq3",
  "Secrétariat" : "sae34bdl2eq1",
  "D001" : "sae34bdl2eq2",
  "D002" : "sae34bdl2eq3",
  "D004" : "sae34bdm1eq1",
  "C004" : "sae34bdm1eq2",
  "C007" : "sae34bdm1eq3",
  "D201" : "sae34bdm2eq1",
  "D307" : "sae34bdm2eq2",
  "C005" : "sae34bdm2eq3"
}

/*
 * URL de l'API sae4api
 */
export const baseUrlApiBD = 'http://localhost:8000/api'

/*
 * Base de l'URL de l'API OpenMeteo
 */
export const baseUrlMeteoApi = "https://api.open-meteo.com/v1/forecast";

/*
 * Queries utilisées lors de l'appel de l'API Meteo
 */
export const queriesApiMeteo= "?latitude=46.1631&longitude=-1.1522&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,wind_speed_10m&timezone=Europe%2FBerlin";
