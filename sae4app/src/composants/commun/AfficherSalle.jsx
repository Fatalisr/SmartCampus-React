import PropTypes from "prop-types";
import DonneesCapteur from "./DonneesCapteur.jsx";
import DonneesMeteo from "./DonneesMeteo.jsx";
import Conseil from "./Conseil.jsx";
import "../../assets/css/commun/afficherSalle.css";

const AfficherSalle = (props) =>{

    return(
        <div id="divAfficherSalle">
            <div id="divData">
                <span style={{width:'40%', textAlign:"center"}}>Données de la salle</span>
                <span style={{width:'40%', textAlign:"center"}}>Donnée météo</span>
            </div>
            <div id="divData">
                <DonneesCapteur room={props.room}/>
                <DonneesMeteo/>
            </div>
            <Conseil room={props.room}/>
        </div>
    )
}
AfficherSalle.propTypes = {
    idSalle: PropTypes.number,
    room: PropTypes.string,
}
export default AfficherSalle