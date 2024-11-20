import { connect } from "react-redux"
import actions from "../../redux/actions"

const Hamburger = (props) =>{
    const hamstyle = {
        bun: {
            width: "3em",
            height: "3em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        patty: {
            width: "100%",
            display: "block",
            height: "10px",
            backgroundColor: "black"
        }
    }
    return (
        <div onClick={props.openHamburger} style={hamstyle.bun}>
            <span style={hamstyle.patty}></span>
            <span style={hamstyle.patty}></span>
            <span style={hamstyle.patty}></span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        openHamburger: ()=>dispatch(actions.openHamburger())
    }
}

export default connect(null, mapDispatchToProps)(Hamburger)