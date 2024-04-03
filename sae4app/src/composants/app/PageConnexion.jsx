import FormulaireConnexion from "./FormulaireConnexion.jsx";
import '../../assets/css/app/pageConnexion.css'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const PageConnexion = () =>{
    //création d'une fonction de navigation utilisant useNavigate
    const navigate = useNavigate();

    //Changement de valeur de l'objet de session "role" à null
    sessionStorage.setItem("role", null);

    //Rechargement de la page afin de faire disparaître le bouton de déconnexion
    useEffect(() =>{
        navigate('/')
    });

    return(
        <div id="page_connexion">
            <h2>Espace connexion</h2>
            <FormulaireConnexion/>
        </div>
    )
}


export default PageConnexion