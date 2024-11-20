import * as types from "../types"

const initialState = {
    isAdmin: false,
    adminOpen: false,
    admin: [{ email: "admin@mail.com", password: "password" }],
    adminMessage: "",
    email: "",
    password: "",
    title: "",
    src: "",
    alt: "",
    price: "",
    product: ""
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {


        case types.ADMIN_OPEN:
            return {
                ...state,
                adminOpen: true
            }
        case types.ADMIN_CLOSE:
            return {
                ...state,
                adminOpen: false
            }
        case types.LOGIN_ADMIN:
            let theOne = state.admin.filter(person => person.username === action.payload.username && person.password === action.payload.password)[0]
            if (theOne) {
                return {
                    isAdmin: true,
                    adminMessage: "",
                    adminOpen: true
                }
            } else {
                return {
                    isAdmin: false,
                    adminMessage: "There was a problem with your credentials"
                }
            }
        case types.HANDLE_ADMIN_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case types.RESET_ADMIN_FORM:
            return {
                ...state,
                title: "",
                src: "",
                alt: "",
                price: "",
                product: "",
                adminOpen: false
            }


        default:
            return state
    }
}

export default adminReducer