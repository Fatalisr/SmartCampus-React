import DetailIntervention from "./DetailIntervention.jsx";
import { useParams } from 'react-router-dom'

const PageDetailIntervention = (props) =>{
    const { id } = useParams()

    return(
        <>
            <DetailIntervention  id={id}/>
        </>
    )
}

export default PageDetailIntervention