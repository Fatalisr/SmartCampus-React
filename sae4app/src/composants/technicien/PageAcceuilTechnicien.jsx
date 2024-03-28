import PropTypes from "prop-types";
import ListeIntervention from "./ListeInterventions.jsx";

const PageAcceuilTechnicien = (props) =>{

    return(
        <>
            <ListeIntervention exampleProp={"temp"}/>
        </>
    )
}

PageAcceuilTechnicien.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default PageAcceuilTechnicien