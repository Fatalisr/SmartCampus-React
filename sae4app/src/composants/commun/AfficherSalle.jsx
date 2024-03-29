import PropTypes from "prop-types";
import DonneesCapteur from "./DonneesCapteur.jsx";
import DonneesMeteo from "./DonneesMeteo.jsx";
import ListeConseils from "./ListeConseils.jsx";
import "../../assets/css/commun/afficherSalle.css";

const AfficherSalle = (props) =>{

    return(
        <>
            <DonneesCapteur name={props.name}/>
            <DonneesMeteo/>
            <ListeConseils exampleProp={"temp"}/>
        </>
    )
}
AfficherSalle.propTypes = {
    name: PropTypes.string.isRequired,
}
export default AfficherSalle