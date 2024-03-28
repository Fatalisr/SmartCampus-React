import PropTypes from "prop-types";
import '../../assets/css/technicien/technicien.css'
import '../../assets/css/index.css'

const Intervention = (props) =>{
    if(props.typeIntervention == "A_INSTALLER"){
        return(
            <>
                <div className={"flRow maint"}>
                    <p>{props.SAName}</p>
                    <p>Maintenance</p>
                    <p>{props.salle}</p>
                    {props.techName != undefined?<p>∅</p>: <p>{props.techName}</p>}
                </div>
            </>
        )
    }
    if(props.typeIntervention == "MAINTENANCE"){
        return(
            <>
                <div className={"flRow maint"}>
                    <p>{props.SAName}</p>
                    <p>Installation</p>
                    <p>{props.salle}</p>
                    {props.techName != undefined?<p>∅</p>: <p>{props.techName}</p>}
                </div>
            </>
        )
    }

}

Intervention.propTypes = {
    id: PropTypes.number.isRequired,
    SAName: PropTypes.string.isRequired,
    techName: PropTypes.number.isRequired,
    typeIntervention: PropTypes.string.isRequired,
    salle: PropTypes.string.isRequired,
}
export default Intervention