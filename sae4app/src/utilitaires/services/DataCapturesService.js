// Imports necessary for the page

// Definition of constant variables

const baseUrlApi = 'https://sae34.k8s.iut-larochelle.fr';
const authentificationHeaders = {
    'dbname': 'sae34bdm1eq1',
    'username': 'm1eq1',
    'userpass': 'sodqif-vefXym-0cikho'
}

// Functions

/*
 * getCaptures : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/captures route of the API Capture api.
 */
export const getCaptures = async(dataType="", nomsa="") =>{

    let queries = "";

    if(dataType !== "" && nomsa !== "")
    {
        queries += `?nom=${dataType}&nomsa=${nomsa}`;
    }
    else if(dataType !== "")
    {
        queries += `?nom=${dataType}`;
    }
    else if(dataType !== "")
    {
        queries += `?nomsa=${nomsa}`;
    }

    try{
        const response = await fetch(`${baseUrlApi}/api/captures${queries}`,{
            headers: authentificationHeaders,
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in getCaptures request : ${error.name}, ${error.message}` ;
    }
}

/*
 * getCapturesInterval : asynchronous function that returns a promise containing json data
 * Sends a HTTP GET request to the /api/captures/interval route of the API Capture api.
 * date1 parameter : starting date of the interval, corresponds to the date1 required query parameter of the route
 * date1 parameter : ending date of the interval, corresponds to the date2 required query parameter of the route
 */
export const getCapturesInterval = async(date1, date2,dataType="") =>{

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
        const response = await fetch(`${baseUrlApi}/api/captures/interval${queries}`, {
            headers: authentificationHeaders
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
 * limit parameter : number of captures awaited, corresponds to the limit query parameter of the route
 */
export const getLastCaptures = async(lines = 0, dataType = "")=>{

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
        const response = await fetch(`${baseUrlApi}/api/captures/last${queries}`, {
            headers: authentificationHeaders
        });

        const jsonData = response.json();
        return await jsonData;
    }
    catch (error){
        throw `Error in getCapturesLast request : ${error.name}, ${error.message}` ;
    }
}



