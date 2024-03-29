import PropTypes from "prop-types";
import {useState,useEffect} from "react";
import Intervention from "./Intervention.jsx";
import '../../assets/css/index.css'
import {getInterventions} from "../../utilitaires/services/DatabaseApiService.js";


const ListeIntervention = (props) =>{
    const [Interventions,setInterventions] = useState([])
    const [userInputType,setUserInputType] = useState("ALL")
    const [userInputAssign,setUserInputAssign] = useState("ALL")

    useEffect(() => {
        const fetchInterventions = async() => {
            return await getInterventions();
        }
        const response = fetchInterventions();
        const responseData = response["hydra:member"]
        response.then((responseData) => {
            setInterventions(Object.values(responseData["hydra:member"]));
        });
    }, []);


    const renderInterventions = Interventions.map((intervention) => {
        const data = Object.values(intervention)
        const id = (parseInt(data[0].slice(-1)))
        const typeInterv = data[3]
        const saName = Object.values(data[5])[2]
        const salle = Object.values(data[5])[3]["name"]
        let techName = ""
        if(data.length === 7) {
            techName = Object.values(data[6])[3]
        }else {
            techName = "Aucun"

        }
        if(userInputType !== "ALL" && userInputAssign !== "ALL") {
           if(userInputType === typeInterv && userInputAssign === "TRUE" && techName !== "Aucun" ) {
               return <Intervention key={id} id={id} salle={salle} typeIntervention={typeInterv} SAName={saName} techName={techName}/>
           }
            if(userInputType === typeInterv && userInputAssign === "FALSE" && techName === "Aucun" ) {
                return <Intervention key={id} id={id} salle={salle} typeIntervention={typeInterv} SAName={saName} techName={techName}/>
            }
       } else if(userInputType === "ALL" && userInputAssign !== "ALL") {
            if(userInputAssign === "TRUE" && techName !== "Aucun" ) {
                return <Intervention key={id} id={id} salle={salle} typeIntervention={typeInterv} SAName={saName} techName={techName}/>
            }
            if(userInputAssign === "FALSE" && techName === "Aucun" ) {
                return <Intervention key={id} id={id} salle={salle} typeIntervention={typeInterv} SAName={saName} techName={techName}/>
            }
        }else if(userInputType !== "ALL" && userInputAssign === "ALL") {
            if(userInputType === typeInterv) {
                return <Intervention key={id} id={id} salle={salle} typeIntervention={typeInterv} SAName={saName} techName={techName}/>
            }
        }else {
            return <Intervention key={id} id={id} salle={salle} typeIntervention={typeInterv} SAName={saName} techName={techName}/>

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
                <option value={"ALL"}>Tout</option>
                <option value={"MAINTENANCE"}>Maintenance</option>
                <option value={"INSTALLATION"}>Installation</option>
            </select>
            <select name={"assign"} onChange={filterAssign}>
                <option value={"ALL"}>Tout</option>
                <option value={"TRUE"}>Assigné</option>
                <option value={"FALSE"}>Non-assigné</option>
            </select>
            <div>
                {Interventions.length === 0? <p>Loading...</p>:renderInterventions}
            </div>
        </>
    )
}

ListeIntervention.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default ListeIntervention