import { connect } from "react-redux"
import actions from "../../redux/actions"

const LogoutBtn = (props) => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.unauthorize()
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">LOGOUT</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        unauthorize: ()=>dispatch(actions.unauthorize())
    }
}

export default connect(null, mapDispatchToProps)(LogoutBtn)