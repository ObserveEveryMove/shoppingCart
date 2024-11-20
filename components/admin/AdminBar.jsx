import { connect } from "react-redux"
import actions from "../../redux/actions"
import LoginForm from "../auth/LoginForm"
import OrderForm from "../admin/OrderForm"


const AdminBar = (props) => {
    return (
        <nav>
            <button onClick={props.adminOpen}>ADMIN</button>
            <dialog open={props.open}>
                <button onClick={props.adminClose}>close</button>
                {
                    !props.isAdmin ?
                    <LoginForm
                    email={props.email}
                    password={props.password} 
                    authMessage={props.adminMessage}
                    handleInput={props.handleAdminInput}
                    login={props.loginAdmin} 
                    /> :
                    <OrderForm />
                }
            </dialog>
        </nav>
    )
}


const mapStateToProps = ({ admin }) => {
    return {
        open: admin.adminOpen,
        isAdmin: admin.isAdmin,
        email: admin.email,
        password: admin.password,
        adminMessage: admin.adminMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adminOpen: ()=>dispatch(actions.adminOpen()),
        adminClose: ()=>dispatch(actions.adminClose()),
        loginAdmin: (admin)=>dispatch(actions.loginAdmin(admin)),
        handleAdminInput: (input)=>dispatch(actions.handleAdminInput(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminBar)