import PropTypes from "prop-types";
import {useState,useEffect} from "react";
import Intervention from "./Intervention.jsx";
import '../../assets/css/index.css'
import {getInterventions} from "../../utilitaires/services/DatabaseApiService.js";


const ListeIntervention = (props) =>{
    const [Interventions,setInterventions] = useState([])
    const [userInputType,setUserInputType] = useState("ALL")
    useEffect(() => {
        const fetchInterventions = async() => {
            return await getInterventions();
        }
        const response = fetchInterventions();
        const responseData = response["hydra:member"]
        response.then((responseData) => {
            setInterventions(responseData);
            console.log(Interventions)
        });
    }, []);
    const [userInputAssign,setUserInputAssign] = useState("ALL")
    {/*const renderInterventions = Interventions.map((intervention) => {
           if(userInputType != "ALL") {
               if(userInputType == intervention.type) {
                   return <Intervention id={intervention.id} salle={""} typeIntervention={"INSTALLATION"} SAName={""} techName={""}/>
               }
           }
    })*/}
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
                {/*{Interventions.length === 0? <p>Loading...</p>:renderInterventions}*/}
            </div>
        </>
    )
}

ListeIntervention.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default ListeIntervention