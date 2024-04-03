import {baseUrlApiBD} from "./config-api.js";

/*
 * getInterventions : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/interventions route of our API.
 */
export const getInterventions = async() =>{

    try{
        const response = await fetch(`${baseUrlApiBD}/interventions`,{
            headers: {
                accept : "application/json",
            }
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in getInterventions request : ${error.name}, ${error.message}` ;
    }
}
/*
 * getInterventionID : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/interventions/{id} route of our API.
 */
export const getInterventionID = async(id) =>{

    try{
        const response = await fetch(`${baseUrlApiBD}/interventions/${id}`,{
            headers: {
                accept : "application/json",
            }
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in getInterventionID request : ${error.name}, ${error.message}` ;
    }
}

/*
 * getInterventions : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/interventions route of our API.
 */
export const getRooms = async() => {

    try {
        const response = await fetch(`${baseUrlApiBD}/rooms`, {
            headers: {
                accept: "application/json",
            }
        });

        const jsonData = response.json();
        return await jsonData;
    } catch (error) {
        throw `Error in getRooms request : ${error.name}, ${error.message}`;
    }
}

export const patchInterventionID = async(id, idnewtech) =>{

    if(idnewtech != null)
        idnewtech = "https://localhost:8000/api/users/" + idnewtech
    try{
        const response = await fetch(`${baseUrlApiBD}/intervention/setTechnician/${id}`,{
            method: "PATCH",
            headers: {
                accept: "application/json",
                "Content-Type": "application/merge-patch+json"
            },
            body: JSON.stringify({
                "tech": idnewtech
            })
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in patchCaptures request : ${error.name}, ${error.message}` ;
    }
}

export const patchEndInterventionID = async(id, report) =>{


    try{
        const response = await fetch(`${baseUrlApiBD}/intervention/setEndIntervention/${id}`,{
            method: "PATCH",
            headers: {
                accept: "application/json",
                "Content-Type": "application/merge-patch+json"
            },
            body: JSON.stringify({
                "report": report,
                "state": "FINIE"
            })
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in patchCaptures request : ${error.name}, ${error.message}` ;
    }
}