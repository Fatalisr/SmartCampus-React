import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {getInterventionID, patchInterventionID} from "../../utilitaires/services/DatabaseApiService.js";
import "../../assets/css/technicien/detailInter.css"
const DetailIntervention = (props) =>{

    const [Intervention,setIntervention] = useState([])

    useEffect(() => {
        const fetchIntervention = async() => {
            return await getInterventionID(props.id);
        }
        const response = fetchIntervention();
        const responseData = response["hydra:member"]
        response.then((responseData) => {
            setIntervention(responseData);
        });
    }, []);



    const renderIntervention = () => {
        const data = Object.values(Intervention)

        const id = (parseInt(data[0]))
        const message = data[1]

        const typeInterv = data[2]

        const saName = Object.values(data[3])[0]

        let currSalle =  Object.values(Object.values(data[3])[1])[0]



        let techName = ""
        let idtech = -1
        if(data.length === 5) {
            techName = Object.values(data[4])[1]
            idtech = Object.values(data[4])[0]
        }else {
            techName = "Aucun"
        }

        const renderAssign = () => {
            if(sessionStorage.getItem('username')===techName)
            {
                return(
                    <div>
                        <button onClick={patchInterventionID(null)}>Me désassigner</button>
                    </div>)
            }
            else if(techName==="Aucun"){
                return(
                    <button onClick={() => {patchInterventionID(15)}}>M'assigner</button>)
            }
        }


        const renderValid = () => {


            if(sessionStorage.getItem('username')===techName)
            {
                return(
                    <div>
                        <button>Valider</button>
                    </div>)
            }
        }


        return(
        <>
            <div className={"detailInter"}>
                <h1 className={"typeInter"}>{typeInterv}</h1>

                <div className={"infoSA"}>
                    <p> {saName} </p>
                    <p> {techName} </p>
                    <p> {currSalle} </p>
                </div>
                <p>{renderAssign()}</p>

                <p className={"message"}>{message}</p>
                {renderValid()}
            </div>
        </>)
        }


    return(
        <>
            {Intervention.length === 0? <p>Loading...</p> : renderIntervention()}
        </>
    )
}

DetailIntervention.propTypes = {
    id: PropTypes.number.isRequired,
}
export default DetailIntervention