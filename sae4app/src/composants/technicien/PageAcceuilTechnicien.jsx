import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import React from "react";

const PageAcceuilTechnicien = (props) =>{
    return(
        sessionStorage.getItem('role')==="technicien"?<>
        <
        />:<Navigate to="/" />
    )
}

PageAcceuilTechnicien.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default PageAcceuilTechnicien