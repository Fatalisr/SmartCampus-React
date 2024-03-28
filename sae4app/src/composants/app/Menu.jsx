
import image from "../../assets/img/logo_smartcampus.png"
import {Outlet} from "react-router-dom"


const Menu = () =>{

    return(
        <>
            <header>
                <img src={image} alt='logo site'/>
                <h2>SMART CAMPUS</h2>
            </header>
            <Outlet/>
        </>
    )
}

export default Menu