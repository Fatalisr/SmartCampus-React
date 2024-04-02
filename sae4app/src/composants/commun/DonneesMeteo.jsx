import {getMeteoData} from "../../utilitaires/services/DataAPIMeteoService.js";

const DonneesMeteo = (props) =>{
    const data = getMeteoData()

    return (
        <div>
            <h1>Données météo</h1>
            <ul>
                <li> {data.temperature} °C</li>
                <li> {data.humidite} %</li>
                <li> {data.wind} km/h</li>
                <li> {data.code} </li>
            </ul>
        </div>
    );
};

export default DonneesMeteo