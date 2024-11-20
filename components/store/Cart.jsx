import { connect } from "react-redux"
import actions from "../../redux/actions"
import { getNum } from "../../utilities/functions"


const Cart = (props) => {
    return (
        <div>
            {props.open ?
                <dialog open={props.open}>
                    <button onClick={props.closeCart}>close</button>


                    {
                        props.cart.map(item => {
                            let price = parseInt(item.quantity) * getNum(item.price)
                            return (
                                <div key={item.id}>

                                    <h4>Item: {item.title}</h4>

                                    <h4>Price: ${price / item.quantity}</h4>

                                    <button onClick={() => props.lessenQuantity(item.id)}>-</button> 

                                    <h4 >Quantity: {item.quantity}</h4>

                                    <button onClick={() => props.increaseQuantity(item.id)}>+</button>

                                    <h4>Total: ${price}</h4>
                                    
                                    <button
                                        onClick={() => props.removeProduct(item)}>Remove</button>
                                </div>
                            )
                        })
                    }

                    {props.cart.length <= 0 ? <h3> Cart is Empty</h3> :
                        <div>
                            <h3>Total before Tax: ${props.total}</h3>
                            <h5>(We apply 10% tax on all orders.)</h5>
                            <h3> Tax: ${(props.appliedTax).toFixed(2)}</h3>
                            <h3>Grand Total: ${(props.grandTotal).toFixed(2)}</h3>
                        </div>
                    }

                </dialog> :
                <button onClick={props.openCart}>CART ({props.cart.length})</button>
            }
        </div>


    )
}

const mapStateToProps = ({ frame, store }) => {
    return {
        open: frame.cartOpen,
        cart: store.cart,
        total: store.total,
        grandTotal: store.grandTotal,
        appliedTax: store.appliedTax,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openCart: () => dispatch(actions.openCart()),
        closeCart: () => dispatch(actions.closeCart()),
        removeProduct: (item) => dispatch(actions.removeProduct(item)),
        increaseQuantity: (id) => dispatch(actions.increaseQuantity(id)),
        lessenQuantity: (id) => dispatch(actions.lessenQuantity(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)