import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import React from "react";

const PageDetailIntervention = (props) =>{
    return(
        sessionStorage.getItem('role')==="technicien"?<>
        <
        />:<Navigate to="/" />
    )
}

PageDetailIntervention.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default PageDetailIntervention