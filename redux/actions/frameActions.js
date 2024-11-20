import { AUTHORIZE, CLOSE_CART, CLOSE_HAMBURGER, CLOSE_LOG_MODAL, GET_WINDOW_SIZE, OPEN_CART, OPEN_HAMBURGER, OPEN_LOG_MODAL, TOGGLE_LOG_FORM, UNAUTHORIZE, HANDLE_INPUT, ADD_USER , LOGIN,SEND_MESSAGE} from "../types"

import { v4 as uuid } from "uuid"


export const authorize = () =>{
    return {
        type: AUTHORIZE
    }
}
export const unauthorize = () =>{
    return {
        type: UNAUTHORIZE
    }
}
export const openLogModal = () =>{
    return {
        type: OPEN_LOG_MODAL
    }
}
export const closeLogModal = () =>{
    return {
        type: CLOSE_LOG_MODAL
    }
}
export const openCart = () =>{
    return {
        type: OPEN_CART
    }
}
export const closeCart = () =>{
    return {
        type: CLOSE_CART
    }
}
export const getWindowSize = (size) =>{
    return {
        type: GET_WINDOW_SIZE,
        payload: size
    }
}
export const toggleLoginForm = () =>{
    return {
        type: TOGGLE_LOG_FORM
    }
}
export const openHamburger = () =>{
    return {
        type: OPEN_HAMBURGER
    }
}
export const closeHamburger = ()=>{
    return {
        type: CLOSE_HAMBURGER
    }
}

// login register stuff

export const handleInput = (input) => {
    return {
        type: HANDLE_INPUT,
        payload: input
    }
}

export const register = (applicant) => {
    applicant.id = uuid()
    return {
        type: ADD_USER,
        payload: applicant,
        // payload: user,
    }
}

export const login = (user) => {
    return {
        type: LOGIN,
        payload: user,
    }
}


export const sendMessage = (message) =>{
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}
// export const admin = () => {
//     return {
//         type: ADMIN,
//     }
// }

// export const toggleAdminForm = () => {
//     return {
//         type: TOGGLE_ADMIN_FORM
//     }
// }