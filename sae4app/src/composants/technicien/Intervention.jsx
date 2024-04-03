import PropTypes from "prop-types";
import './../../assets/css/technicien/technicien.css'
import './../../assets/css/index.css';

const Intervention = (props) =>{
    if(props.typeIntervention === "INSTALLATION"){
        return(
            <>
                    <div className={"flRow install"} onClick={() => {props.redirection(props.id)}}>
                            <p>{props.SAName}</p>
                            <p>Installation</p>
                            <p>{props.salle}</p>
                            <p>{props.techName}</p>
                    </div>
            </>
        )
    }
    if(props.typeIntervention === "MAINTENANCE"){
        return(
            <>
                <div className={"flRow maint"} onClick={() => {props.redirection(props.id)}}>
                        <p>{props.SAName}</p>
                        <p>Maintenance</p>
                        <p>{props.salle}</p>
                        <p>{props.techName}</p>
                </div>
                </>
        )
    }

}

Intervention.propTypes = {
    id: PropTypes.number.isRequired,
    SAName: PropTypes.string.isRequired,
    techName: PropTypes.string.isRequired,
    typeIntervention: PropTypes.string.isRequired,
    salle: PropTypes.string.isRequired,
    redirection: PropTypes.func.isRequired
}
export default Intervention