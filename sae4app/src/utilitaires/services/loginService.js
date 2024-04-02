import CryptoJS from 'crypto-js';
import {getUsers} from './DatabaseApiService.js'


/*
 * login : verifie les username et le mdp et renvoit true s'il sont bons
 */
export const login = async (username, password) => {
    const users = await getUsers()
    let returnValue = false
    for (let i = 0; i < Object.values(users).length; i++) {
        if (username === Object.values(users)[i]['username'] &&
            Object.values(users)[i]['password'] === CryptoJS.SHA256(password).toString()
        ){
            returnValue = true
            sessionStorage.setItem("role",Object.values(users)[i]['role'])
            break
        }
    }
    return returnValue
}
