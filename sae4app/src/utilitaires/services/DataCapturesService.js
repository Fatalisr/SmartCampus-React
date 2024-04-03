// Imports necessary for the page

import {baseUrlApiCapture, roomsDatabase} from "./config-api.js";

// Functions

/*
 * getCaptures : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/captures route of the API Capture api.
 * room parameter : room of the data we want to access ("D204", "C005" ...)
 * dataType : type of the data we want to access ("temp", "co2", "hum")
 * nomsa : name of the SA we want to access ("ESP-013" ...)
 */
export const getCaptures = async(room, dataType= "", nomsa= "") =>{

    // On récupère le nom de la base de donénes associée à la salle passée en paramètre
    let selectedRoomDatabase = roomsDatabase[room];

    // Initialisation de la variable qui contiendra les query pour la requête
    let queries = "";

    // Le type de donnée et le nom du SA ont été renseigné
    if(dataType !== "" && nomsa !== "")
    {
        queries += `?nom=${dataType}&nomsa=${nomsa}`;
    }
    // Seul le type de donnée a été renseigné
    else if(dataType !== "")
    {
        queries += `?nom=${dataType}`;
    }
    // Seul le nom du SA a été renseigné
    else if(nomsa !== "")
    {
        queries += `?nomsa=${nomsa}`;
    }

    // L'instruction try envoie une requête GET à l'API Capture avec l'URL, les queries et les headers correspondants
    try{
        const response = await fetch(`${baseUrlApiCapture}/api/captures${queries}`,{
            headers: {
                'dbname': selectedRoomDatabase,
                'username': 'm1eq1',
                'userpass': 'sodqif-vefXym-0cikho'
            },
        });

        const jsonData = response.json();
        return await jsonData;
    }
    // L'instruction catch renvoie une erreur en afficher le nom et le message de l'erreur rencontrée
    catch (error){
        throw `Error in getCaptures request : ${error.name}, ${error.message}` ;
    }
}

/*
 * getCapturesInterval : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/captures/interval route of the API Capture api.
 * room parameter : room of the data we want to access ("D204", "C005" ...)
 * date1 parameter : starting date of the interval, corresponds to the date1 required query parameter of the route
 * date1 parameter : ending date of the interval, corresponds to the date2 required query parameter of the route
 * dataType : type of the data we want to access ("temp", "co2", "hum")
 */
export const getCapturesInterval = async(room, date1, date2,dataType="") =>{

    // On récupère le nom de la base de donénes associée à la salle passée en paramètre
    let selectedRoomDatabase = roomsDatabase[room];
    let queries = "";
    const startDateQuery = `date1=${date1.toString()}`;
    const endDateQuery = `date2=${date2.toString()}`;

    if(dataType !== "")
    {
        queries += `?nom=${dataType}&${startDateQuery}&${endDateQuery}`;
    }
    else
    {
        queries += `?${startDateQuery}&${endDateQuery}`;
    }

    try {
        const response = await fetch(`${baseUrlApiCapture}/api/captures/interval${queries}`, {
            headers: {
                'dbname': selectedRoomDatabase,
                'username': 'm1eq1',
                'userpass': 'sodqif-vefXym-0cikho'
            }
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in getCapturesInterval request : ${error.name}, ${error.message}` ;
    }
}

/*
 * getLastCaptures : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/captures/last route of the API Capture api.
 * room parameter : room of the data we want to access ("D204", "C005" ...)
 * limit parameter : number of captures awaited, corresponds to the limit query parameter of the route
 * dataType : type of the data we want to access ("temp", "co2", "hum")
 */
export const getLastCaptures = async(room, lines = 0, dataType = "")=>{

    let selectedRoomDatabase = roomsDatabase[room];
    let queries = "";

    if(lines !== 0 && dataType !== "")
    {
        queries += `?nom=${dataType}&limit=${lines}`;
    }
    else if(lines !== 0)
    {
        queries += `?limit=${lines}`;
    }
    else if(dataType !== "")
    {
        queries += `?nom=${dataType}`;
    }

    try {
        const response = await fetch(`${baseUrlApiCapture}/api/captures/last${queries}`, {
            headers: {
                'dbname': selectedRoomDatabase,
                'username': 'm1eq1',
                'userpass': 'sodqif-vefXym-0cikho'
            }
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in getCapturesLast request : ${error.name}, ${error.message}` ;
    }
}