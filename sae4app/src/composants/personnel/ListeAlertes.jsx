import PropTypes from "prop-types";

const ListeAlertes = (props) =>{
    return(
        <div id="listeAlerteDiv">
            Alertes de la salle {props.idSalle}
        </div>
    )
}

ListeAlertes.propTypes = {
    idSalle: PropTypes.number.isRequired,
}
export default ListeAlertes