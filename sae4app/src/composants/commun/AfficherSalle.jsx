import PropTypes from "prop-types";
import DonneesCapteur from "./DonneesCapteur.jsx";
import DonneesMeteo from "./DonneesMeteo.jsx";
import Conseil from "./Conseil.jsx";
import "../../assets/css/commun/afficherSalle.css";

const AfficherSalle = (props) =>{

    return(
        <>
            <DonneesCapteur room={props.room}/>
            <DonneesMeteo/>
            <Conseil room={props.room}/>
        </>
    )
}
AfficherSalle.propTypes = {
    room: PropTypes.string.isRequired,
}
export default AfficherSalle