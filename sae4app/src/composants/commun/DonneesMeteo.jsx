import {getMeteoData} from "../../utilitaires/services/DataAPIMeteoService.js";
import soleil from '../../assets/img/soleil.png'
import soleil_nuage from '../../assets/img/nuage_soleil.png'
import nuage from '../../assets/img/nuage.png'
import pluie from '../../assets/img/pluie.png'
import soleil_pluie from '../../assets/img/pluie_soleil.png'
import neige from '../../assets/img/neige.png'
import orage from '../../assets/img/orage.png'


const DonneesMeteo = () =>{
    const data = getMeteoData()

    return (
        <div id="donneeAPIMeteo">
            <div id="divImg">
                <img src={
                    data.code === 0 ?
                        soleil
                        : (data.code === 1 || data.code === 2 || data.code === 3) ?
                            soleil_nuage
                            : (data.code === 45 || data.code === 48) ?
                                nuage
                                : (data.code === 61 || data.code === 63 || data.code === 65 || data.code === 56 || data.code === 57) ?
                                    pluie
                                    : (data.code === 80 || data.code === 81 || data.code === 82) ?
                                        soleil_pluie
                                        : (data.code === 71 || data.code === 73 || data.code === 75 || data.code === 77) ?
                                            neige
                                            : (data.code === 85 || data.code === 86 || data.code === 95 || data.code === 96 || data.code === 99) ?
                                                orage
                                                : soleil
                }/>
            </div>
            <span>Temperature : {data.temperature} °C</span>
            <span>Humidité : {data.humidite} %</span>
            <span>Vent : {data.wind} km/h</span>
        </div>
    );
};

export default DonneesMeteo