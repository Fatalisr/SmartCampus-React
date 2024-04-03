import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import {login} from "../../utilitaires/services/loginService.js"
import eyeOpen from '../../assets/img/eyeOpen.png'
import eyeClose from '../../assets/img/eyeClose.png'

const FormulaireConnexion = () =>{
    // useState permettant de gérer les erreurs de login
    const [errLogin,setErrLogin] = useState()

    //création d'une fonction de navigation utilisant useNavigate
    const navigate = useNavigate()

    // useState permettant d'afficher le mot de passe marqué
    const [viewPasswordInput, setVPI] = useState('password')

    //fonction qui gère la connexion à referant et usager
    const handleLogin =  () => {
        //Fait appel a la fonction login afin de vérifier la validité des identifiants entrés et changer la valeur de l'objet de session role en consequence
        const result =  login(document.getElementById('username').value,document.getElementById('password').value)

        result.then((res)=>{
            if(res){
                //Redirection selon les identifiants entrés
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

    //fonction qui change la valeur de l'objet de session "role" à usager et redirige vers la page usager
    const handleuser = () => {
        sessionStorage.setItem("role", "usager")
        navigate('/usager')
    }

    //fonction qui gère l'affichage du mot de passe
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
                {errLogin ? <span id="err_span">identifiant ou mot de passe incorrect</span> : <span></span>}
            </div>
            <button onClick={handleLogin}>Se connecter</button>
            <div id="lign_or"><span>ou</span></div>
            <button onClick={handleuser} id="acces_u_btn">Acces a l'espace usager</button>
        </div>

    )
}

export default FormulaireConnexion