import {Navigate} from "react-router-dom";


const PageDetailSallePersonnel = () =>{
    return(
        sessionStorage.getItem('role')==="PERSONNEL"?<>
        </>:<Navigate to="/" />
    )
}



export default PageDetailSallePersonnel