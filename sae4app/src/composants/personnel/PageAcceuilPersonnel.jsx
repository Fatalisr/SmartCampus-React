import ListeSalles from "./ListeSalles.jsx";
import {Navigate} from "react-router-dom";


const PageAcceuilPersonnel = () =>{
    return(
        sessionStorage.getItem('role')==="PERSONNEL"?<>
            <ListeSalles />
        </>:<Navigate to="/" />
    )
}
export default PageAcceuilPersonnel