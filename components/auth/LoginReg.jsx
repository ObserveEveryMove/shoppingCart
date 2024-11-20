import { connect } from "react-redux"
import actions from "../../redux/actions"
import Login from "./Login"
import Register from "./Register"

const LoginReg = (props) => {
    return (
        <div>
            {
                !props.modalOpen ?
                    <button onClick={props.openModal} >LOGIN</button> :
                    (<dialog open={props.modalOpen}>
                        <button onClick={props.closeModal}>close</button>
                        {
                            props.isLogin ?
                                <Login /> :
                                <Register />
                        }
                        <button onClick={props.toggleForms}>{props.isLogin ? "REGISTER" : "LOGIN"}</button>
                    </dialog>)
            }
        </div>
    )
}


const mapStateToProps = ({ frame }) => {
    return {
        isLogin: frame.isLogin,
        modalOpen: frame.logModalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(actions.openLogModal()),
        closeModal: () => dispatch(actions.closeLogModal()),
        toggleForms: () => dispatch(actions.toggleLoginForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReg)