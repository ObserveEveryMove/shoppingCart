import { connect } from "react-redux"
import actions from "../../redux/actions"
import Hamburger from "./Hamburger"
import Nav from "./Nav"
import Cart from "../store/Cart"

const HamburgerMenu = (props) => {
    const menu = {
        width:"100%",
        maxWidth: "200px",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "5",
        display: "flex",
        flexDirection: "column"
    }
    return (
        <>
            {
                !props.hamburger ?
                    <Hamburger /> :
                    props.cartOpen ?
                        <Cart /> :
                        <dialog open={props.hamburger} style={menu}>
                            <Nav isHam={true} />
                            <button onClick={props.openCart}>CART</button>
                            <button onClick={props.closeHamburger}>close</button>
                        </dialog>
            }
        </>

    )
}

const mapStateToProps = ({ frame }) => {
    return {
        hamburger: frame.hamburger,
        cartOpen: frame.cartOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeHamburger: () => dispatch(actions.closeHamburger()),
        openCart: () => dispatch(actions.openCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu)