import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import {login} from "../../utilitaires/services/loginService.js"
import eyeOpen from '../../assets/img/eyeOpen.png'
import eyeClose from '../../assets/img/eyeClose.png'

const FormulaireConnexion = () =>{

    const [errLogin,setErrLogin] = useState()
    const navigate = useNavigate()
    const [viewPasswordInput, setVPI] = useState('password')

    const handleLogin =  () => {
        const result =  login(document.getElementById('username').value,document.getElementById('password').value)

        result.then((res)=>{
            if(res){
                switch (sessionStorage.getItem('role')) {
                    case 'TECHNICIEN': navigate('/technicien')
                        break
                    case 'PERSONNEL': navigate('/personnel')
                        break
                    default: navigate('/')
                }
            }else{
                setErrLogin(true)
            }
        })

    };

    const handleuser = () => {
        sessionStorage.setItem("role", "usager")
        navigate('/usager')
    }
    const changeViewPassword = () => {
        if(viewPasswordInput === 'password'){
            setVPI('')
        }else{
            setVPI('password')
        }
    }

    return(
        <div id="connexion_form">
            <input id="username" placeholder='Saisisez votre identifiant'/>
            <div id="mdp_form">
                <input id="password" type={viewPasswordInput} placeholder='Saisisez votre mot de passe'/>
                <img alt="" id="viewMdpImage" onClick={() => changeViewPassword()}
                     src={viewPasswordInput === 'password' ? eyeOpen : eyeClose}/>
            </div>
            {errLogin ? <span id="err_span">identifiant ou mot de passe incorrect</span> : <span></span>}
            <button onClick={handleLogin}>Se connecter</button>
            <div id="lign_or"><span>ou</span></div>
            <button onClick={handleuser} id="acces_u_btn">Acces a l'espace usager</button>
        </div>

    )
}

export default FormulaireConnexion