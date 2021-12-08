import { LOGGED_IN, LOGGED_OUT } from '../types/auth';


export function login(){
    localStorage.setItem('isLogged', 'true');
    return{
        type: LOGGED_IN
    }
}

export function logout(){
    localStorage.setItem('isLogged', 'false');
    return{
        type: LOGGED_OUT
    }
}
