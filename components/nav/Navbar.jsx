import { Outlet } from "react-router-dom"
import { connect } from "react-redux"
import Nav from "./Nav"
import HamburgerMenu from "./HamburgerMenu"
import Cart from "../store/Cart"
import LogoutBtn from "../auth/LogoutBtn"


const Navbar = (props) => {
    const navBar = {
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }
    return (
        <div>
            {
                props.window <= 400 ?
                    (<>
                        <div style={navBar}>
                            <HamburgerMenu />
                            <LogoutBtn />
                           


                        </div>
                        <Outlet />
                    </>

                    )
                    :
                    (
                        <>
                            <div style={navBar}>
                                <Nav />
                                <Cart />
                                
                                
                                <LogoutBtn />

                            </div>
                            <Outlet />
                        </>
                    )
            }
        </div>
    )
}


const mapStateToProps = ({ frame }) => {
    return {
        window: frame.window,
       
    }
}


export default connect(mapStateToProps, null)(Navbar)