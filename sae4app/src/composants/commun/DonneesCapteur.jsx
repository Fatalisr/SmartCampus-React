import PropTypes from "prop-types";
import {getLastCaptures} from "../../utilitaires/services/DataCapturesService.js";
import { useEffect, useState } from "react";
import "../../assets/css/commun/afficherSalle.css";
const DonneesCapteur = (props) =>{
    const [datas, setData] = useState([]);

    useEffect(() => {
        const fetchtemp= async() => {
            return await getLastCaptures(props.name, 1, "temp");
        }
        const fetchhumid = async() => {
            return await getLastCaptures(props.name, 1, "hum");
        }
        const fetchCO2 = async() => {
            return await getLastCaptures(props.name, 1, "co2");
        }
        Promise.all([fetchtemp(), fetchhumid(), fetchCO2()]).then((values) => {
            setData(values);
        });
    }, []);

    const renderData = datas.map((data) => {
        console.log(data)
        if(data[0].localisation === props.name) {
            return <div key={data[0].id} className="DonnesCapteurline">{data[0].nom} - {data[0].valeur}</div>;
        }
    })

    return(
        <>
            <h1> Données {props.name}</h1>
            <div id="DonneesCapteurdiv">
                {renderData}
            </div>
        </>
    )
}

DonneesCapteur.propTypes = {
    name: PropTypes.string.isRequired,
}
export default DonneesCapteur