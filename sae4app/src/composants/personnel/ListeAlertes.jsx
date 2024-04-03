import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import Alerte from "./Alerte.jsx";
import {getLastCaptures} from "../../utilitaires/services/DataCapturesService.js";



const ListeAlertes = (props) =>{

    /* ALERTE TEMPERATURE */
    const [dataTable, setDataTable] = useState([])

    useEffect(()=>{
        getLastCaptures(props.nomSalle,20).then((data)=>{
            setDataTable(data)
        })
    }, [])

    const returnList = dataTable.map((data)=>{
        if(((data['valeur'] < 17 || data['valeur'] > 21) && data['nom'] === 'temp') ||
            (data['valeur'] > 70 && data['nom'] === 'humi') ||
            ((data['valeur'] < 400 || data['valeur'] > 1300) && data['nom'] === 'co2')
        ){
            return <Alerte key={data['id']} typeData={data['nom']} date={data['dateCapture']} valeur={data['valeur']}/>
        }
    })


    return(
        <div id="listeAlerteDiv">
            {returnList}
        </div>
    )
}
ListeAlertes.propTypes = {
    nomSalle: PropTypes.string.isRequired,
}

export default ListeAlertes