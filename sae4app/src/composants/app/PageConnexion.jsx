import FormulaireConnexion from "./FormulaireConnexion.jsx";
import '../../assets/css/app/pageConnexion.css'
import {useEffect} from "react";

const PageConnexion = () =>{

    useEffect(() => {
        sessionStorage.setItem("role", "")
    }, []);

    return(
        <div id="page_connexion">
            <h2>Espace connexion</h2>
            <FormulaireConnexion/>
        </div>
    )
}


export default PageConnexion