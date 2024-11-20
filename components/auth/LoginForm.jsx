
import React from "react"
import { connect } from "react-redux"
import actions from "../../redux/actions"

const LoginForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {}
        user.email = props.email
        user.password = props.password
        props.login(user)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL:</label>
                <input id="email" name="email" value={props.email} onChange={(e) => props.handleInput(e.target)} required />
                <label htmlFor="password">PASSWORD:</label>
                <input id="password" name="password" value={props.password} onChange={(e) => props.handleInput(e.target)} required />
                <button type="submit">LOGIN</button>
            </form>
            <p>{props.authMessage}</p>
        </>

    )
}

const mapStateToProps = ({ frame }) => {
    return {
        email: frame.email,
        password: frame.password,
        authMessage: frame.authMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authorize: () => dispatch(actions.authorize()),
        handleInput: (input) => dispatch(actions.handleInput(input)),
        login: (user) => dispatch(actions.login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)