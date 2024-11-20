import React from "react"
import { connect } from "react-redux"
import actions from "./redux/actions"
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/auth/PrivateRoute"
import PublicRoute from "./components/auth/PublicRoute"
import LoginReg from "./components/auth/LoginReg"
import Navbar from "./components/nav/Navbar"
import Home from "./components/nav/Home"
import Landing from "./components/nav/Landing"
import Product1 from "./components/store/Product1"
import Product2 from "./components/store/Product2"
import Product3 from "./components/store/Product3"
import Product4 from "./components/store/Product4"

class App extends React.Component {
    componentDidMount() {
        this.props.getWindowSize(window.innerWidth)
        window.addEventListener("resize", () => this.props.getWindowSize(window.innerWidth))
    }

    render() {
        return (
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route element={<LoginReg />}>
                        <Route path="/" element={<Landing />} />
                    </Route>
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route element={<Navbar />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/product1" element={<Product1 />} />
                        <Route path="/product2" element={<Product2 />} />
                        <Route path="/product3" element={<Product3 />} />
                        <Route path="/product4" element={<Product4 />} />
                    </Route>
                </Route>
            </Routes>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWindowSize: (size) => dispatch(actions.getWindowSize(size))
    }
}

export default connect(null, mapDispatchToProps)(App)