import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {getInterventionID} from "../../utilitaires/services/DatabaseApiService.js";
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

        console.log(Intervention)
        const id = (parseInt(data[0]))
        const message = data[1]

        const typeInterv = data[2]

        const saName = Object.values(data[3])[0]

        let currSalle =  Object.values(Object.values(data[3])[1])[0]


        let techName = ""
        if(data.length === 5) {
            techName = Object.values(data[4])[1]
        }else {
            techName = "Aucun"
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
                <p className={"message"}>{message}</p>
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