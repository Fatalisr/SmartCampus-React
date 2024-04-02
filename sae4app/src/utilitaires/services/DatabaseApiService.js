import data from "./config-api.json"

const baseUrlApiBD = "http://localhost:8000/api";


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
        throw `Error in getCaptures request : ${error.name}, ${error.message}` ;
    }
}


export const patchInterventionID = async(id, idnewtech) =>{

    try{
        const response = await fetch(`${baseUrlApiBD}/intervention/setTechnician/${id}`,{
            method: "PATCH",
            headers: {
                accept : "application/json",

            },
            body: JSON.stringify({
                "tech": "https://localhost:8000/api/users/" + idnewtech
            })
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in patchCaptures request : ${error.name}, ${error.message}` ;
    }
}