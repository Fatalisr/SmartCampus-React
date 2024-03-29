import CryptoJS from 'crypto-js';

const baseUrlApiBD = "http://localhost:8000/api";


/*
 * getUser : retourne la liste des users existant
 */
const getUsers = async () =>{
    try{
        const response   = await fetch(`${baseUrlApiBD}/users`,{
            headers: {
                accept : "application/json",
            }
        });
        return response.json()
    }
    catch (error){
        throw `Error in getInterventions request : ${error.name}, ${error.message}` ;
    }
}

/*
 * login : verifie les username et le mdp et renvoit true s'il sont bons
 */
export const login = async (username, password) => {
    const users = await getUsers()
    let returnValue = false
    for (let i = 0; i < Object.values(users)[4].length; i++) {
        if (username === Object.values(users)[4][i]['username'] &&
            Object.values(users)[4][i]['password'] === CryptoJS.SHA256(password).toString()
        ){
            returnValue = true
            sessionStorage.setItem("role",Object.values(users)[4][i]['role'])
            break
        }
    }
    return returnValue
}
