import { connect } from "react-redux"
import {Navigate, Outlet} from "react-router-dom"

const PrivateRoute = (props) =>{
    return props.isAuth ? <Outlet /> : <Navigate to="/" />
}

const mapStateToProps = ({frame}) =>{
    return {
        isAuth: frame.isAuth
    }
}
export default connect(mapStateToProps,null)(PrivateRoute)