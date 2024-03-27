import {useEffect, useState} from "react";
import {salles$} from "../../utilitaires/data_salles.js";
import Salle from "./Salle.jsx";

import "./../../assets/css/listeSalle.css"
const ListeSalles = () =>{
    const [salles, setSalles] = useState([]);

    useEffect(() => {
        salles$.then((salles) => {
            setSalles(salles);
        });
    }, []);

    const toDetail = (id) => {
        let url = '/personnel/salle/' + id
        window.location= url
    };

    const compareSalles = (a, b) =>{
        return b.nbAlerte24h - a.nbAlerte24h
    }

    const renderFile = salles.sort(compareSalles).map(salle => {
        return <Salle id={salle.id} nom={salle.nom} nbAlerte24h={salle.nbAlerte24h} redirection={toDetail}/>;
    })

    return(
        <>
            <h1>Liste des Salles</h1>
            <div className={"listSalle"}>
            {renderFile}
            </div>
        </>
    )
}


export default ListeSalles