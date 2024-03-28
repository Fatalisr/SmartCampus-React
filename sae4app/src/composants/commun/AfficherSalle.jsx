import PropTypes from "prop-types";

const AfficherSalle = (props) =>{

    return(
        <>
            salle {props.id}
        </>
    )
}

AfficherSalle.propTypes = {
    id: PropTypes.number,
}
export default AfficherSalle