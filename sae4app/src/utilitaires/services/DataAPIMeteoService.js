import {useEffect, useState} from "react";

const baseUrlMeteoApi = "https://api.open-meteo.com/v1/forecast?latitude=46.1631&longitude=-1.1522&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,wind_speed_10m&timezone=Europe%2FBerlin";
export const getMeteoData = () => {
    const [datas, setData] = useState([]);

    const getdata = async() => {
        try {
            console.log(baseUrlMeteoApi);
            const response = await fetch(baseUrlMeteoApi, {
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