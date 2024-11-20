import { connect } from "react-redux"
import {Navigate, Outlet} from "react-router-dom"

const PublicRoute = (props) =>{
    return props.isAuth ? <Navigate to="/home" /> : <Outlet />
}

const mapStateToProps = ({ frame }) =>{
    return {
        isAuth: frame.isAuth
    }
}
export default connect(mapStateToProps,null)(PublicRoute)