import PropTypes from "prop-types";
import DonneesCapteur from "./DonneesCapteur.jsx";
import DonneesMeteo from "./DonneesMeteo.jsx";
import ListeConseils from "./ListeConseils.jsx";

const AfficherSalle = (props) =>{

    return(
        <>
            <DonneesMeteo/>
            <DonneesCapteur name={props.name}/>
            <ListeConseils exampleProp={"temp"}/>
        </>
    )
}
AfficherSalle.propTypes = {
    name: PropTypes.string.isRequired,
}
export default AfficherSalle