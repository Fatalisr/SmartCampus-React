import {useEffect, useState} from "react";
import {baseUrlMeteoApi, queriesApiMeteo} from "./config-api.js";

export const getMeteoData = () => {
    const [datas, setData] = useState([]);

    const getdata = async() => {
        try {
            const response = await fetch(`${baseUrlMeteoApi}${queriesApiMeteo}`, {
                headers: {
                    accept: "application/ld+json",
                }
            });

            const jsonData = response.json();
            return await jsonData;
        } catch (error) {
            throw `Error in getMeteoData request : ${error.name}, ${error.message}`;
        }
    }
    useEffect(() => {
        const renderDonneesAsync = async () => {
            const donnees = await getdata();
            const temperature = donnees.current['temperature_2m'];
            const humidite = donnees.current['relative_humidity_2m'];
            const code = donnees.current['weather_code'];
            const wind = donnees.current['wind_speed_10m'];
            setData({temperature:temperature, humidite:humidite, code:code, wind:wind});
        };

        renderDonneesAsync();
    }, []);

    return datas
}