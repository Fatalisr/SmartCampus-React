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
        Promise.all([fetchtemp(), fetchhumid(), fetchCO2()]).then(values => {
            const fvalues = values.flat();
            setData(fvalues);
        });
    }, [props.name]);

    const renderData = datas.map((data) => {
        return <div key={data.id} className="DonnesCapteurline">{data.nom} - {data.valeur}</div>;
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