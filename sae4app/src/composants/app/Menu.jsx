
import image from "../../assets/img/logo_smartcampus.png"
import {Outlet, useNavigate} from "react-router-dom"
import React from "react";


const Menu = () =>{
    const navigate = useNavigate()

    const handleretour = () => {
        sessionStorage.setItem("role", "")
        navigate('/')
    }

    return(
        <>
            <header>
                <img src={image} alt='logo site'/>
                <h2>SMART CAMPUS</h2>
                {sessionStorage.getItem('role') !== "" ? <button onClick={handleretour} id="acces_u_btn">
                    {sessionStorage.getItem('role') === "usager" ? <p>Retour</p> : <p>Deconnection</p>}
                </button> : <></>}
            </header>
            <Outlet/>
        </>
    )
}

export default Menu