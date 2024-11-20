import { Link } from 'react-router-dom'


const Nav = (props) => {
    const navStyle = {
        hamburger: {
            width: "100%",
            display: "flex",
            flexDirection: "column"
        },
        bar: {
            width: "100%",
            maxWidth: "50vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
        }
    }
    return (
        <nav style={props.isHam ? navStyle.hamburger : navStyle.bar}>
            <Link to="product1">Product One</Link>
            <Link to="product2">Product Two</Link>
            <Link to="product3">Product Three</Link>
            <Link to="product4">Product Four</Link>

        </nav>
    )
}

export default Nav