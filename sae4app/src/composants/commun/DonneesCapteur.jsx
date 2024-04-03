import PropTypes from "prop-types";
import {getLastCaptures} from "../../utilitaires/services/DataCapturesService.js";
import { useEffect, useState } from "react";
import "../../assets/css/commun/afficherSalle.css";
import nuage from '../../assets/img/picto-co2.png'
import thermo from '../../assets/img/picto-temperature.png'
import eau from '../../assets/img/picto-humidite.png'

const DonneesCapteur = (props) =>{
    // useState permettant de récupérer les données
    const [datas, setData] = useState([]);

    // Fonction asynchrone récupérant la dernière donnée de température remontée
    const fetchTemp= async() => {
        return await getLastCaptures(props.room, 1, "temp");
    }
    // Fonction asynchrone récupérant la dernière donnée d'humidité remontée
    const fetchHumid = async() => {
        return await getLastCaptures(props.room, 1, "hum");
    }
    // Fonction asynchrone récupérant la dernière donnée de CO2 remontée
    const fetchCO2 = async() => {
        return await getLastCaptures(props.room, 1, "co2");
    }

    useEffect(() => {
        // Récupération de toutes les promises créées par les fonctions ci-dessus grâce au useState
        Promise.all([fetchTemp(), fetchHumid(), fetchCO2()]).then((values) => {
            const fvalues = values.flat();
            setData(fvalues);
        });
    }, [props.room]);

    //fonction qui permet de d'afficher les données contenus dans la liste datas
    const renderData = datas.map((data) => {
        return <div key={data.id} className="DonnesCapteurline">
            {data.nom==='temp'?<img src={thermo}/>:data.nom==='hum'?<img src={eau}/>:<img src={nuage}/>} {data.valeur} {data.nom==='temp'?' °C':data.nom==='hum'?' %':'ppm'}
        </div>;
    })

    return(
        <>
            <div id="DonneesCapteurdiv">
                {renderData}
            </div>
        </>
    )
}

DonneesCapteur.propTypes = {
    room: PropTypes.string.isRequired,
}
export default DonneesCapteur