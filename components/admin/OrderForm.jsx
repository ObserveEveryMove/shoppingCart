import { connect } from "react-redux"
import actions from "../../redux/actions"

const OrderForm = (props) =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        let newProduct = {}
        newProduct.product = props.product
        newProduct.title = props.title 
        newProduct.src = props.src 
        newProduct.alt = props.alt 
        newProduct.price = props.price
        // props.orderProduct(newProduct)
        props.resetAdminForm()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">PRODUCT:</label>
            <input type="text" name="product" id="product" value={props.product} onChange={(e)=>props.handleAdminInput(e.target)} required />
            <label htmlFor="title">TITLE:</label>
            <input type="text" name="title" id="title" value={props.title} onChange={(e)=>props.handleAdminInput(e.target)} required />
            <label htmlFor="src">SRC:</label>
            <input type="text" name="src" id="src" value={props.src} onChange={(e)=>props.handleAdminInput(e.target)} required />
            <label htmlFor="alt">ALT:</label>
            <input type="text" name="alt" id="alt" value={props.alt} onChange={(e)=>props.handleAdminInput(e.target)} required />
            <label htmlFor="price">PRICE:</label>
            <input type="text" name="price" id="price" value={props.price} onChange={(e)=>props.handleAdminInput(e.target)} required />
            <button type="submit">ORDER</button>
        </form>
    )
}

const mapStateToProps = ({admin}) =>{
    return {
        title: admin.title,
        alt: admin.alt,
        src: admin.src,
        price: admin.price,
        product: admin.product
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleAdminInput: (input)=>dispatch(actions.handleAdminInput(input)),
        resetAdminForm: ()=>dispatch(actions.resetAdminForm()),

        orderProduct: (product)=>dispatch(actions.orderProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)