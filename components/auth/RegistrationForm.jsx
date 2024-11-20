import { connect } from "react-redux"
import actions from "../../redux/actions"

const RegistrationForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.testPassword !== props.password) {
            props.sendMessage("Passwords do not match :(")
        } else {
            let newUser = {}
            newUser.firstName = props.firstName
            newUser.lastName = props.lastName
            newUser.email = props.email
            newUser.password = props.password
            props.register(newUser)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">FIRST NAME:</label>
                <input id="firstName" name="firstName" value={props.firstName} onChange={(e) => props.handleInput(e.target)} required />
                <label htmlFor="lastName">LAST NAME:</label>
                <input id="lastName" name="lastName" value={props.lastName} onChange={(e) => props.handleInput(e.target)} required />
                <label htmlFor="email">EMAIL:</label>
                <input id="email" name="email" value={props.email} onChange={(e) => props.handleInput(e.target)} required />
                <label htmlFor="password">PASSWORD:</label>
                <input id="password" name="password" value={props.password} onChange={(e) => props.handleInput(e.target)} required />
                <label htmlFor="testPassword">PLEASE RE-ENTER PASSWORD</label>
                <input id="testPassword" name="testPassword" value={props.testPassword} onChange={(e) => props.handleInput(e.target)} required />
                <button type="submit">SUBMIT REGISTRATION</button>
            </form>
            <p>{props.authMessage}</p>
        </>

    )
}


const mapStateToProps = ({ frame }) => {
    return {
        firstName: frame.firstName,
        lastName: frame.lastName,
        email: frame.email,
        password: frame.password,
        testPassword: frame.testPassword,
        authMessage: frame.authMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (input) => dispatch(actions.handleInput(input)),
        sendMessage: (message) => dispatch(actions.sendMessage(message)),
        register: (applicant)=>dispatch(actions.register(applicant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)