import DetailIntervention from "./DetailIntervention.jsx";
import { useParams } from 'react-router-dom'
import {Navigate} from "react-router-dom";

const PageDetailIntervention = () =>{
    const { id } = useParams()

    return(


    sessionStorage.getItem('role')==="TECHNICIEN"?<>
            <DetailIntervention  id={id}/>
        </>:<Navigate to="/" />
    )
}

export default PageDetailIntervention