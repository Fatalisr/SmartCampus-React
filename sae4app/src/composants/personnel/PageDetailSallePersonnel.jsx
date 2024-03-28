import { useParams } from 'react-router-dom'
const PageDetailSallePersonnel = () =>{
    const { idSalle } = useParams()
    return(
        <>
            {idSalle}
        </>
    )
}




export default PageDetailSallePersonnel