
import {Navigate} from "react-router-dom";
import ListeIntervention from "./ListeInterventions.jsx";


const PageAcceuilTechnicien = () =>{
    return(
        sessionStorage.getItem('role')==="TECHNICIEN"?<ListeIntervention exampleProp={"temp"}/>:<Navigate to="/" />
    )
}

export default PageAcceuilTechnicien