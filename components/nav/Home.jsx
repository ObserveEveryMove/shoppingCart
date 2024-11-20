import { connect } from "react-redux"
// import actions from "../../redux/actions"
import AdminBar from "../admin/AdminBar"

const Home = (props) => {
    return (

        <>
    <AdminBar/>
        <h1>Home</h1>
        <h2> Hey {props.firstName}</h2>
        </>
        
        
    )
}



const mapStateToProps = ({ frame }) => {
    let { currentUser } = frame

    return {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName

    }
}



export default connect(mapStateToProps, null)(Home)
