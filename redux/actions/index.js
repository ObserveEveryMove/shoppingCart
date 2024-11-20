import * as frameActions from "./frameActions"
import * as storeActions from "./storeActions"
import * as adminActions from "./adminActions"

const actions = {
    authorize: frameActions.authorize,
    unauthorize: frameActions.unauthorize,
    openLogModal: frameActions.openLogModal,
    closeLogModal: frameActions.closeLogModal,
    openCart: frameActions.openCart,
    closeCart: frameActions.closeCart,
    getWindowSize: frameActions.getWindowSize,
    toggleLoginForm: frameActions.toggleLoginForm,
    openHamburger: frameActions.openHamburger,
    closeHamburger: frameActions.closeHamburger,

    // store actions
    addToCart: storeActions.addToCart,
    removeProduct: storeActions.removeProduct,
    // mrPipes store actions
    lessenQuantity: storeActions.lessenQuantity,
    increaseQuantity: storeActions.increaseQuantity,


    // loginReg actions
    sendMessage: frameActions.sendMessage,

    handleInput: frameActions.handleInput,
    register: frameActions.register,
    login: frameActions.login,

    //  my admin stuff
    // admin: frameActions.admin,
    // toggleAdminForm: frameActions.toggleAdminForm,

    // mrPipes admin stuff
    adminOpen: adminActions.adminOpen,
    adminClose: adminActions.adminClose,
    loginAdmin: adminActions.loginAdmin,
    logoutAdmin: adminActions.logoutAdmin,
    handleAdminInput: adminActions.handleAdminInput,
    resetAdminForm: adminActions.resetAdminForm

}

export default actions