import PropTypes from "prop-types";
import door from "../../assets/img/door.png"

const Salle = (props) =>{

    if(props.nbAlerte24h >= 3) {
        return (
            <>
                <button onClick={() => {props.redirection(props.id)}} className={"rouge"}> <img src={door} alt={"ff"} className={"doorImg"} /> <span> {props.nom} </span><span>{props.nbAlerte24h} alertes</span></button>
            </>
            )
    }
    else if(props.nbAlerte24h == 1) {
        return (
            <>
                <button onClick={() => {props.redirection(props.id)}} className={"orange"}> <img src={door} alt={"ff"} className={"doorImg"} /> <span>  {props.nom} </span> <span> {props.nbAlerte24h} alerte </span></button>
            </>)
    }

    else if(props.nbAlerte24h == 2) {
        return (
            <>
                <button onClick={() => {props.redirection(props.id)}} className={"orange"}> <img src={door} alt={"ff"} className={"doorImg"} /> <span>{props.nom} </span><span>{props.nbAlerte24h} alertes </span></button>
            </>)
    }
    return (
        <>
            <button onClick={() => {props.redirection(props.id)}} className={"vert"}> <img src={door} alt={"ff"} className={"doorImg"} /> <span> {props.nom} </span><span>{props.nbAlerte24h} alerte</span></button>
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