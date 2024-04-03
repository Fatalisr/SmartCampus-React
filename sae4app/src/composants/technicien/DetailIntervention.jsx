import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {
    getInterventionID,
    patchEndInterventionID,
    patchInterventionID
} from "../../utilitaires/services/DatabaseApiService.js";
import "../../assets/css/technicien/detailInter.css"
const DetailIntervention = (props) =>{

    const [Intervention,setIntervention] = useState([])

    useEffect(() => {
        const fetchIntervention = async() => {
            return await getInterventionID(props.id);
        }
        const response = fetchIntervention();
        response.then((responseData) => {
            setIntervention(responseData);
        });
    }, []);

    const patchInter = (id, idTech) => {
        patchInterventionID(id, idTech).then(() => window.location= '/technicien/intervention/' + id)
    }



    const [report, setReport] = useState("");

    const handleChangeReport = (e) => {
        setReport(e.target.value)
    };

    const validation = (id) => {
        if(report !== "")
        {
            patchEndInterventionID(id, report).then(() => window.location= '/technicien/')
        }
    }

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
            if(sessionStorage.getItem('id_user')===idtech.toString())
            {
                return(
                        <button onClick={() => {patchInter(id, null)}}>Me désassigner</button>
                    )
            }
            else if(idtech===-1){
                return(
                    <button onClick={() => {patchInter(id, sessionStorage.getItem('id_user'))}}>M&apos;assigner</button>)
            }
        }


        const renderValid = () => {
            if(sessionStorage.getItem('id_user')===idtech.toString())
            {
                return(
                    <>
                        <div>
                            <textarea rows={10} cols={50} placeholder={"Message"} onChange={handleChangeReport}/>
                        </div>
                        <div>
                            <button onClick={() => validation(id)}>Valider</button>
                        </div>
                    </>)
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
    id: PropTypes.string.isRequired,
}
export default DetailIntervention