import React, {useEffect, useState} from "react";
import Selecteursalle from "./SelecteurSalle.jsx";
import AfficherSalle from "../commun/AfficherSalle.jsx";


const PageAccueilUsager = (props) =>{
    const [name, setname] = useState("0")

    function handleChange(e) {
        setname(e.target.value)
    }

    return(
        <>
            <Selecteursalle handleChange={handleChange}/>
            {name !== "0" ? <AfficherSalle name={name}/> : <span>Veuillez choisir une salle pour voir les données</span>}
        </>
    )
}
export default PageAccueilUsager