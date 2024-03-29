import PropTypes from "prop-types";
import {useState} from "react";
import Alerte from "./Alerte.jsx";

const ListeAlertes = () =>{
    const [listeAlerte, setListeAlerte] = useState([{data:'CO2',date:'10/03/24',valeur:400},
        {data:'Temp',date:'10/03/24',valeur:25},{data:'Humi',date:'10/03/24',valeur:60}])
    let key = 0
    const renderList = listeAlerte.map(alerte=> {
        key = key+1
        return <Alerte key={key} typeData={alerte.data} dateAlerte={alerte.date} valeur={alerte.valeur}/>
    })

    return(
        <div id="listeAlerteDiv">
            {renderList}
        </div>
    )
}


export default ListeAlertes