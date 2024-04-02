import FormulaireConnexion from "./FormulaireConnexion.jsx";
import '../../assets/css/app/pageConnexion.css'
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const PageConnexion = () =>{
    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.setItem("role", "")
        navigate('/');
    }, []);

    return(
        <div id="page_connexion">
            <h2>Espace connexion</h2>
            <FormulaireConnexion/>
        </div>
    )
}


export default PageConnexion