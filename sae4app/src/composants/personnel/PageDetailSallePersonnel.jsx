import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import React from "react";

const PageDetailSallePersonnel = (props) =>{
    return(
        sessionStorage.getItem('role')==="personnel"?<>
        <
        />:<Navigate to="/" />
    )
}

PageDetailSallePersonnel.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default PageDetailSallePersonnel