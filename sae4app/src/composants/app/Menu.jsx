import image from "../../assets/img/logo_smartcampus.png"
import {Outlet, useNavigate} from "react-router-dom"


const Menu = () =>{

    const navigate = useNavigate()

    const handleretour = () => {
        sessionStorage.setItem("role", null)
        navigate('/')
    }

    return(
        <>
            <header>
                <div>
                    <img src={image} alt='logo site'/>
                    <h2>SMART CAMPUS</h2>
                </div>
                {sessionStorage.getItem('role') !== "null" ? <button onClick={handleretour}>
                    {sessionStorage.getItem('role') === "usager" ? "Retour" : "Déconnexion"}
                </button> : <></>}
            </header>
            <Outlet/>
        </>
    )
}

export default Menu