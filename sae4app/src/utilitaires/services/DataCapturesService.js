import { useState, useEffect } from 'react';

const baseUrlApi = 'https://sae34.k8s.iut-larochelle.fr';
const authentificationHeaders = {
    'dbname': 'sae34bdm1eq1',
    'username': 'm1eq1',
    'userpass': 'sodqif-vefXym-0cikho'
}

export const getCaptures = async() =>{


    const response = await fetch(`${BASE_URL_API}/api/captures`,{
        headers: AUTHENTIFICATION_HEADERS
    });

    return await response.json();
}

export const getCapturesInterval = async() =>{

    const startDateQuery = 'date1='${date1.toString()};
    const endDateQuery = 'date2='${date2.toString()};

    const response = await fetch(`${BASE_URL_API}/api/captures/interval?${startDateQuery}&${endDateQuery}`,{
        headers: AUTHENTIFICATION_HEADERS
    });

    return await response.json();
}

export const getLastCaptures = async(lines) =>{

    const limitQuery = 'limit='${lines.toString()};

    const response = await fetch(`${BASE_URL_API}/api/captures/last?${limitQuery}`,{
        headers: AUTHENTIFICATION_HEADERS
    });

    return await response.json();
}



