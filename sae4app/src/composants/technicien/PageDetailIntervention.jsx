import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";

const PageDetailIntervention = (props) =>{
    return(
        sessionStorage.getItem('role')==="TECHNICIEN"?<>
        </>:<Navigate to="/" />
    )
}

PageDetailIntervention.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default PageDetailIntervention