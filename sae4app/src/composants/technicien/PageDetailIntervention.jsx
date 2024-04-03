import DetailIntervention from "./DetailIntervention.jsx";
import { useParams,Navigate } from 'react-router-dom'

const PageDetailIntervention = () =>{
    const { id } = useParams()

    return(


    sessionStorage.getItem('role')==="TECHNICIEN"?<>
            <DetailIntervention  id={id}/>
        </>:<Navigate to="/" />
    )
}

export default PageDetailIntervention