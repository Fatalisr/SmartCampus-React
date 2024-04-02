import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import {getLastCaptures} from "../../utilitaires/services/DataCapturesService.js";
import {getMeteoData} from "../../utilitaires/services/DataAPIMeteoService.js";

const Conseil = (props) =>{


    /*
     * setAdvice : fonction qui permet de définir le conseil à afficher à l'utilisateur en fonction des données remontées (captures et météo) et des intervalles de confiances établis
     * captures (Array) : tableau contenant les données JSON des dernières captures remontées de chaque type de donnée (temp, co2 et hum).
     * meteoData (json) : donnée remontées par l'APi Open Meteo.
     * aimedTemperature (integer) : température visée par l'intervalle de confiance de la température
     */
    const setAdvice = (captures,meteoData,aimedTemperature) => {

        let advice = "";
        let tempCapture = true;
        let humCapture = true;
        let co2Capture = true;

        for(var capture of captures)
        {
            if(capture.nom === "temp")  // Valeur de température anormalement basse
            {
                tempCapture = capture;
            }
            else if(capture.nom === "hum" )
            {
                humCapture = capture;
            }

            else if(capture.nom === "co2")
            {
                co2Capture = capture;
            }
        }

        if(tempCapture.valeur > aimedTemperature+2)
        {
            if(co2Capture.valeur > 1000 || humCapture.valeur > 70)
            {
                advice = "Ouvrez la / les porte(s)";
            }
            else
            {
                advice = "Allumez ou augmentez le chauffage et vérifiez que les fenêtres sont fermées.";
            }
        }
        else if(tempCapture.valeur < aimedTemperature-2)
        {
            if(humCapture.valeur > 70 || co2Capture.valeur > 1000)
            {
                advice = "Eteindre le chauffage et aérer la pièce en ouvrant portes et fenêtres";
            }
            else
            {
                if(meteoData.temperature > tempCapture.valeur)
                {
                    advice = "Eteindre le chauffage, fermez fenêtres et volets puis ouvrez la / les portes.";
                }
                else
                {
                    advice = "Eteindre le chauffage et ouvrez les fenêtres et les portes.";
                }
            }
        }
        return advice;
    }

    // useState permettant de récupérer les données analysées pour déterminer le conseil
    const [captures, setCaptures] = useState([]);

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
            setCaptures(fvalues);
        });
    }, [props.room]);

    // Récupération de la date du jour pour vérifier l'intervalle de confiance des données
    const todayDate = new Date();

    // La température visée de base est 19. Si le mois de la date est compris entre 5 et 7 compris (juin à août), alors l'intervalle de confiance est revue à la hausse
    let aimedTemperature = 19;
    if(todayDate.getMonth() >= 5 && todayDate.getMonth() <= 7)
    {
        aimedTemperature = 24;
    }
    // Récupération de la météo
    const meteoData = getMeteoData();
    // Appel de la fonction setAdvice pour récupérer le conseil que l'on souhaite afficher
    let advice = setAdvice(captures,meteoData,aimedTemperature);

    return(
        <>
            <h1>Conseils</h1>
            {
                advice === ""
                    ? (<p>Aucun conseil à proposer, continuez comme ça !</p>)
                    : (<p>{advice}</p>)
            }
        </>
    )
}

Conseil.propTypes = {
    room: PropTypes.string.isRequired,
}
export default Conseil