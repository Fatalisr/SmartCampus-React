import { useState} from "react";
import Selecteursalle from "./SelecteurSalle.jsx";
import AfficherSalle from "../commun/AfficherSalle.jsx";
import '../../assets/css/usager/pageAcceuilUsager.css'

const PageAccueilUsager = () =>{
    const [name, setname] = useState("0")

    function handleChange(e) {
        setname(e.target.value)
    }

    return(
        <div id="divAcceuilUsager">
            <Selecteursalle handleChange={handleChange}/>
            {name !== "0" ? <AfficherSalle room={name}/> : <span id="noRoomSpan">Veuillez choisir une salle pour voir les données</span>}
        </div>
    )
}
export default PageAccueilUsager