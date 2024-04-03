import PropTypes from "prop-types";
import {useState,useEffect} from "react";
import {getRooms} from "../../utilitaires/services/DatabaseApiService.js";

const SelecteurSalle = (props) =>{
    const [salles, setsalles] = useState([])

    useEffect(() => {
        getRooms().then((salle) => {
            setsalles(salle);
        });

    }, []); // Liste des "dépendances" du useEffect

    const renderRoom = salles.map((salle) => {
        return <option key={salle.id} value={salle.name}>{salle.name}</option>
    })

    return(
        <>
            <div id="selecteurSalle">
                <select onChange={props.handleChange}>
                    <option value={"0"}>Choisisez une salle</option>
                    {renderRoom}
                </select>
            </div>
        </>
    )
}

SelecteurSalle.propTypes = {
    handleChange: PropTypes.func.isRequired,
}
export default SelecteurSalle