import PropTypes from "prop-types";
import React, {useState} from "react";
import Selecteursalle from "./SelecteurSalle.jsx";
import AfficherSalle from "../commun/AfficherSalle.jsx";


const PageAccueilUsager = (props) =>{
    const [id, setid] = useState(0)

    function handleChange(e) {
        setid(parseInt(e.target.value,10))
    }

    return(
        <>
            <Selecteursalle handleChange={handleChange}/>
            {id !== 0 ? <AfficherSalle id={id}/> : <span>Veuillez choisir une salle pour voir les données</span>}
        </>
    )
}

PageAccueilUsager.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default PageAccueilUsager