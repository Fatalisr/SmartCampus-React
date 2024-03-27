
import React,{useState, useEffect} from "react";
import {users$} from "../../utilitaires/users_data.js";
import {useNavigate} from 'react-router-dom';



const FormulaireConnexion = () =>{
    const [userList, setUserList] = useState([])
    const [errLogin,setErrLogin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        users$.then((user)=>{
            setUserList(user)
        })
    }, []);

    const handleLogin = () => {
        userList.map((user)=>{
            if (user.username === document.getElementById('username').value && user.password === document.getElementById('password').value){
                sessionStorage.setItem('role',user.role)
                navigate('/'+user.role)
            }else{
                setErrLogin(true)
            }
        })
    };

    return(
        <div id="connexion_form">
            <input id="username" placeholder='Saisisez votre identifiant'/>
            <input id="password" type='password' placeholder='Saisisez votre mot de passe'/>
            {errLogin ? <span id="err_span">identifiant ou mot de passe incorrect</span> : <span></span>}
            <button onClick={handleLogin}>Se connecter</button>
            <div id="lign_or"><span>ou</span></div>
            <button onClick={() => navigate('/usager')} id="acces_u_btn">Acces a l'espace usager</button>
            { sessionStorage.getItem('role')}
        </div>

    )
}

export default FormulaireConnexion