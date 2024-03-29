import PropTypes from "prop-types";

const Alerte = (props) =>{
    return(
        <div className="alert_div">
            <span className="alertData">{props.typeData}</span>
            <span className="alertDate">{props.dateAlerte}</span>
            <span className="alertValeur">
                valeur max: {props.valeur}
                {props.typeData === 'CO2'?'ppm':props.dateAlerte==='Temp'?'°C':'%'}
            </span>
        </div>
    )
}

Alerte.propTypes = {
    typeData: PropTypes.string.isRequired,
    dateAlerte: PropTypes.string.isRequired,
    valeur: PropTypes.number.isRequired
}
export default Alerte