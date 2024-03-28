import PropTypes from "prop-types";
import {useState} from "react";
import Intervention from "./Intervention.jsx";


const ListeIntervention = (props) =>{
    const [Interventions,setInterventions] = useState([])
    const [userInputType,setUserInputType] = useState("ALL")
    const [userInputAssign,setUserInputAssign] = useState("ALL")
    const renderInterventions = Interventions.map((intervention) => {
           if(userInputType != "ALL") {
               if(userInputType == intervention.type) {
                   return <Intervention/>
               }
           }
    })
    const filterType = (e) => {
        setUserInputType(e.target.value)
    }
    const filterAssign = (e) => {
        setUserInputAssign(e.target.value)
    }
    return(
        <>
            <h3>Interventions :</h3>
            <select name={"type"} onChange={filterType}>
                <option value={"MAINTENANCE"}>Maintenance</option>
                <option value={"A_INSTALLER"}>Installation</option>
                <option value={"ALL"}>Tout</option>
            </select>
            <select name={"assign"} onChange={filterAssign}>
                <option value={"TRUE"}>Assigné</option>
                <option value={"FALSE"}>Non-assigné</option>
                <option value={"ALL"}>Tout</option>
            </select>
            <div>
                {renderInterventions}
                <Intervention/>
            </div>
        </>
    )
}

ListeIntervention.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default ListeIntervention