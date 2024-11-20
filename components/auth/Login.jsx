import React from "react"
import { connect } from "react-redux"
import actions from "../../redux/actions"
import LoginForm from "./LoginForm"

const Login = (props) => {
    return (
        <div>
            <h3>Login</h3>
            <div>
                <LoginForm
                email={props.email}
                password={props.password} 
                authMessage={props.authMessage}
                handleInput={props.handleInput}
                login={props.login}
                />
            </div>
         
        </div>
    )
}

const mapStateToProps = ({ frame }) =>{
    return {
        email: frame.email,
        password: frame.password,
        authMessage: frame.authMessage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        authorize: ()=>dispatch(actions.authorize()),
        handleInput: (input)=>dispatch(actions.handleInput(input)),
        login: (user)=>dispatch(actions.login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)