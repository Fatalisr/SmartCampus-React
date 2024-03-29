import PropTypes from "prop-types";

const AfficherSalle = (props) =>{

    return(
        <>
            données de la salle {props.idSalle}
        </>
    )
}

AfficherSalle.propTypes = {
    idSalle: PropTypes.number.isRequired,
}
export default AfficherSalle