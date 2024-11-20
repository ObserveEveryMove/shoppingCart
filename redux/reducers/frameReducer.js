import { AUTHORIZE, CLOSE_CART, CLOSE_HAMBURGER, CLOSE_LOG_MODAL, GET_WINDOW_SIZE, OPEN_CART, OPEN_HAMBURGER, OPEN_LOG_MODAL, TOGGLE_LOG_FORM, UNAUTHORIZE, HANDLE_INPUT, ADD_USER, LOGIN,SEND_MESSAGE} from "../types"

let initialState = {
    isAuth: false,
    logModalOpen: false,
    cartOpen: false,
    window: window.innerWidth || 0,
    isLogin: true,
    hamburger: false,

    // login register stuff

    // users: [],
    // password: "",
    // name: "",
    // username: "",
    // greeting: "",


    firstName: "",
    lastName: "",
    email: "",
    password: "",
    testPassword: "",
    users: [],
    currentUser: {},
    authMessage: ""

    // ADMIN stuff
    // isAdmin: false,
    // adminForm: false,
}

const frameReducer = (state = initialState, action) => {
    console.log(state.users)
    // console.log(state.adminForm)
    switch (action.type) {
        case AUTHORIZE:
            return {
                ...state,
                isAuth: true
            }
        case UNAUTHORIZE:
            return {
                ...state,
                isAuth: false,
                isLogin: true,
                logModalOpen: false
            }
        case OPEN_LOG_MODAL:
            return {
                ...state,
                logModalOpen: true
            }
        case CLOSE_LOG_MODAL:
            return {
                ...state,
                logModalOpen: false,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                testPassword: "",
                authMessage: ""
            }
        case OPEN_CART:
            return {
                ...state,
                cartOpen: true
            }
        case CLOSE_CART:
            return {
                ...state,
                cartOpen: false
            }
        case GET_WINDOW_SIZE:
            return {
                ...state,
                window: action.payload
            }
        case TOGGLE_LOG_FORM:
            return {
                ...state,
                isLogin: !state.isLogin,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                testPassword: "",
                authMessage: ""
            }
        case OPEN_HAMBURGER:
            return {
                ...state,
                hamburger: true
            }
        case CLOSE_HAMBURGER:
            return {
                ...state,
                hamburger: false
            }

        // login register stuff


        case HANDLE_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }


        case ADD_USER:
            let oops = state.users.filter(user => user.email === action.payload.email) || []
            if (oops.length >= 1) {
                return {
                    ...state,
                    authMessage: "This email is already registered to the database",
                    isAuth: false,
                    email: "",
                    firstName: "",
                    lastName: "",
                    password: "",
                    testPassword: "",

                }

            } else {
                return {
                    ...state,
                    users: [...state.users, action.payload],
                    isAuth: true,
                    isLogin: true,
                    logModalOpen: false,
                    authMessage: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    testPassword: "",
                    currentUser: Object.assign({},action.payload)
                }
            }

        case LOGIN:
            let user = state.users.filter(user => user.email === action.payload.email && user.password === action.payload.password)[0]
            if (user) {
                return {
                    ...state,
                    currentUser: Object.assign({}, user),
                    isAuth: true,
                    isLogin: true,
                    logModalOpen: false,
                    authMessage: "",
                    email: "",
                    password: ""
                }
            } else {
                return {
                    ...state,
                    isAuth: false,
                    authMessage: "There was a problem with the username or password"
                }
            }
// Admin stuff
        // case ADMIN:
        //     let admin = state.username === "ADMIN" && state.password === "ADMIN"
        //     if (admin) {
        //         return {
        //             ...state,
        //             isAuth: true,
        //             isAdmin: true,
        //             username: "",
        //             password: "",
        //         }
        //     } else {
        //         return {
        //             ...state,
        //             isAuth: false,
        //             isAdmin: false,
        //             username: "",
        //             password: "",
        //         }
        //     }

        //     case TOGGLE_ADMIN_FORM:
        //         return {
        //             ...state,
        //             adminForm: !state.adminForm,
        //         }

        // default

        
        case SEND_MESSAGE:
            return {
                ...state,
                authMessage: action.payload,
                isAuth: false,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                testPassword: "",
            }

        default:
            return state
    }
}


export default frameReducer