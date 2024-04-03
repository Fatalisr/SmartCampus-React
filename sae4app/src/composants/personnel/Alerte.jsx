import PropTypes from "prop-types";

const Alerte = (props) =>{
    const [date, time] = props.date.split(' ')

    return(
        <div className="alert_div"  style={props.typeData === 'co2' ? {backgroundColor: 'rgba(133,133,133,0.6)'} :
            props.typeData === 'temp' ? {backgroundColor: 'rgba(255,0,0,.6)'}  : {backgroundColor: 'rgba(155,135,218,0.6)'} }>
            <span className="alertData">{props.typeData}</span>
            <div className="alertDate">
                <span>{date} </span>
                <span>{time}</span>
            </div>
            <span className="alertValeur">
                valeur: {props.valeur}
                {props.typeData === 'co2' ? ' ppm' : props.typeData === 'temp' ? ' °C' : ' %'}
            </span>
        </div>
    )
}

Alerte.propTypes = {
    typeData: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    valeur: PropTypes.string.isRequired
}
export default Alerte