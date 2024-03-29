import FormulaireConnexion from "./FormulaireConnexion.jsx";
import '../../assets/css/app/pageConnexion.css'

const PageConnexion = () =>{

    sessionStorage.setItem('role',null)

    return(
        <div id="page_connexion">
            <h2>Espace connexion</h2>
            <FormulaireConnexion/>
        </div>
    )
}


export default PageConnexion