import PropTypes from "prop-types";
import {getLastCaptures} from "../../utilitaires/services/DataCapturesService.js";
import { useEffect, useState } from "react";

const DonneesCapteur = (props) =>{
    const [datas, setData] = useState([]);

    useEffect(() => {
        const fetchCaptures = async() => {
            return await getLastCaptures(3);
        }
        const response = fetchCaptures();
        const responseData = response["hydra:member"]
        response.then((responseData) => {
            setData(responseData);
        });
    }, []);

    const renderData = datas.map((data) => {
        if(data.localisation === props.name) {
            return <li key={data.id}>{data.nom} - {data.valeur}</li>;
        }
    })

    return(
        <>
            <h1> Données {props.name}</h1>
            <ul>
                {renderData}
            </ul>
        </>
    )
}

DonneesCapteur.propTypes = {
    name: PropTypes.string.isRequired,
}
export default DonneesCapteur