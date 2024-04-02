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
 * getUser : retourne la liste des users existant
 */
export const getUsers = async () =>{
    try{
        const response   = await fetch(`${baseUrlApiBD}/users`,{
            headers: {
                accept : "application/json",
            }
        });
        return response.json()
    }
    catch (error){
        throw `Error in getUsers request : ${error.name}, ${error.message}` ;
    }
}