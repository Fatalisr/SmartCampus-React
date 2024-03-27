import PropTypes from "prop-types";

const Salle = (props) =>{

    if(props.nbAlerte24h >= 3) {
        return (
            <>
                <button onClick={() => {props.redirection(props.id)}} className={"rouge"}>{props.nom} {props.nbAlerte24h} alertes</button>
            </>
            )
    }
    else if(props.nbAlerte24h >= 1) {
        return (
            <>
                <button onClick={() => {props.redirection(props.id)}} className={"orange"}>{props.nom} {props.nbAlerte24h} alerte </button>
            </>)
    }
    return (
        <>
            <button onClick={() => {props.redirection(props.id)}} className={"vert"}>{props.nom} {props.nbAlerte24h} alerte</button>
        </>
    )
}

Salle.propTypes = {
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    nbAlerte24h: PropTypes.number.isRequired,
    redirection: PropTypes.func.isRequired
}
export default Salle