import PropTypes from "prop-types";
import {salles$} from "../../utilitaires/data_salles.js";
import {useState} from "react";
import {useEffect} from "react";

const SelecteurSalle = (props) =>{
    const [salles, setsalles] = useState([])

    useEffect(() => {
        salles$.then((salle) => {
            setsalles(salle);
        });

    }, []); // Liste des "dépendances" du useEffect

    const renderRoom = salles.map((salle) => {
        return <option key={salle.id} value={salle.nom}>{salle.nom}</option>
    })

    return(
        <>
            <div>
                <label>Selecteur :</label>
                <select onChange={props.handleChange}>
                    <option value={"0"}>-- Select one --</option>
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