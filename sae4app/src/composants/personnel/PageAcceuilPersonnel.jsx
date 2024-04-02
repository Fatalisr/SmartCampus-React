import {Navigate} from "react-router-dom";
import ListeSalles from "./ListeSalles.jsx";


const PageAcceuilPersonnel = () =>{
    return(
        sessionStorage.getItem('role')==="PERSONNEL"?
            <ListeSalles />:
            <Navigate to="/" />
    )
}


export default PageAcceuilPersonnel