import {useEffect, useState} from "react";
import Salle from "./Salle.jsx";
import "./../../assets/css/listeSalle.css"
import {getRooms} from "../../utilitaires/services/DatabaseApiService.js";


const ListeSalles = () =>{
    const [salles, setSalles] = useState([]);

    const [filterMin, setFilterMin] = useState(0);
    const [filterMax, setFilterMax] = useState(3);

    const [filterName, setFilterName] = useState("");

    const handleChangeMin = (e) => {
        setFilterMin(e.target.value)
    };

    const handleChangeMax = (e) => {
            setFilterMax(e.target.value)
    };

    const handleChangeName = (e) => {
        setFilterName(e.target.value)
    };

    useEffect(() => {
        getRooms().then((salle) => {
            setSalles(salle);
        });

    }, []); // Liste des "dépendances" du useEffect

    const toDetail = (nomSalle) => {
        window.location= '/personnel/salle/' + nomSalle
    };

    const compareSalles = (a, b) =>{
        return b.nbAlerte24h - a.nbAlerte24h
    }

    const renderFile = salles.sort(compareSalles).map(salle => {
        /*if (filterMin <= salle.nbAlerte24h && filterMax >= salle.nbAlerte24h &&*/ if(salle.name.toLowerCase().includes(filterName.toLowerCase()))
            return <Salle key={salle.id} id={salle.id} nom={salle.name} redirection={toDetail}/>;
    })

    return(
        <>
            <div className={"PageListeSalle"}>
                <h2>Liste des Salles</h2>
                <div className={"input"}>
                    <input type="text" className="search-input" placeholder="Rechercher" onChange={handleChangeName}/>
                    <input type="text" className="search-input" placeholder="Minimum"   onChange={handleChangeMin}/>
                    <input type="text" className="search-input" placeholder="Maximum"   onChange={handleChangeMax}/>
                </div>
                <div className={"listSalle"}>
                    {renderFile}
                </div>
            </div>
        </>
    )
}


export default ListeSalles