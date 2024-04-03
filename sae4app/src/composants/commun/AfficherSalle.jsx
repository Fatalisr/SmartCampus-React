import PropTypes from "prop-types";
import DonneesCapteur from "./DonneesCapteur.jsx";
import DonneesMeteo from "./DonneesMeteo.jsx";
import Conseil from "./Conseil.jsx";
import "../../assets/css/commun/afficherSalle.css";

const AfficherSalle = (props) =>{

    return(
        <>
            <DonneesCapteur name={props.name}/>
            <DonneesMeteo/>
            <Conseil room={props.name}/>
        </>
    )
}
AfficherSalle.propTypes = {
    idSalle: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,

}
export default AfficherSalle