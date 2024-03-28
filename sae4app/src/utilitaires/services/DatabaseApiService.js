import data from "./config-api.json"

const baseUrlApiBD = "http://localhost:8000/api";


/*
 * getInterventions : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/interventions route of our API.
 */
export const getInterventions = async() =>{

    try{
        console.log(baseUrlApiBD);
        const response = await fetch(`${baseUrlApiBD}/interventions`,{
            headers: {
                accept : "application/ld+json",
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
                accept : "application/ld+json",
            }
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in getCaptures request : ${error.name}, ${error.message}` ;
    }
}