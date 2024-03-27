import {Navigate} from "react-router-dom";
import React from "react";


const PageAcceuilPersonnel = () =>{

    return(
        sessionStorage.getItem('role')==="personnel"?<>
        <
        />:<Navigate to="/" />
    )
}


export default PageAcceuilPersonnel