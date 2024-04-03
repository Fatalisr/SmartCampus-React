import { useParams } from 'react-router-dom'
import {useState} from "react";
import {Navigate} from "react-router-dom";
import ListeAlertes from "./ListeAlertes.jsx";
import AfficherSalle from "../commun/AfficherSalle.jsx";
import '../../assets/css/personnel/pageDetailSallesPersonnel.css'
import fleche_droite from '../../assets/img/fleche_droite.png'
import fleche_gauche from '../../assets/img/fleche_gauche.png'
import door from "../../assets/img/door.png"

const PageDetailSallePersonnel = () =>{
    const { nomSalle } = useParams()
    const [alertOrDetail, setAlertOrDetails] = useState('alert')
    const handleChange = (value) => {
        setAlertOrDetails(value)
    }

    return(
        <>
            <div>
                <button onClick={()=>{window.location.href = '/personnel'} } id="returnBtn">
                    <img src={door} alt="pictoporte"/>
                    Retour à la liste
                </button>
            </div>
            <div id="displayBtnsDiv">
                {alertOrDetail ==='alert'?
                    <button id="displayDetailsRoomBtn" onClick={()=>handleChange('detail')}>
                        <div>Voir les données</div>
                        <img src={fleche_droite} alt="fleche_droite"/>
                    </button>:
                    <button id="displayAlertsRoomBtn" onClick={() => handleChange('alert')}>
                        <img src={fleche_gauche} alt="fleche_droite"/>
                        <div>Voir les alertes</div>
                    </button>
                }
            </div>
            <div id="div_display">

                {alertOrDetail === 'alert' ?
                    <div className="slide-in-left">
                        <span style={{display:'flex',width:'100%',textAlign:'center',margin:'10px 0'}}> Cette page presente une liste des dernières alerte (dépassement des bornes) pour cette salle (max 30) </span>
                        <ListeAlertes nomSalle={nomSalle}/>
                    </div> :
                    <div className="slide-in-right">composant en chantier</div>
                }
            </div>
        </>
    )
}
export default PageDetailSallePersonnel