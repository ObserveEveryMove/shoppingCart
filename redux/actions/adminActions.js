import * as types from "../types"

export const adminOpen = () =>{
    return {
        type: types.ADMIN_OPEN
    }
}
export const adminClose = () =>{
    return {
        type: types.ADMIN_CLOSE
    }
}
export const loginAdmin = (admin) =>{
    return {
        type: types.LOGIN_ADMIN,
        payload: admin
    }
}
export const logoutAdmin = () =>{
    return {
        type: types.LOGOUT_ADMIN
    }
}
export const handleAdminInput = (input) =>{
    return {
        type: types.HANDLE_ADMIN_INPUT,
        payload: input
    }
}
export const resetAdminForm = () =>{
    return {
        type: types.RESET_ADMIN_FORM
    }
} 