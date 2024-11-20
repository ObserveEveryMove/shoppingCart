

import { connect } from "react-redux"
import actions from "../../redux/actions"

const Card = (props) => {


    const addToCart = (e) => {
        e.preventDefault()
        let input = e.target.firstChild.firstChild
        props.addToCart(props.card, input)
    }

    return (
        <div>
            
            <div>
                <header>
                    <h3>{props.card.title}</h3>
                </header>
                <figure style={{ width: "80vw", maxWidth: "200px" }}>
                    <img src={props.card.src} alt={props.card.alt} style={{ width: "100%" }} />
                </figure>
                <section>
                    <p>Price: {props.card.price}</p>

                    <form onSubmit={addToCart}>
                        <label htmlFor="quantity">
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                min="1"
                                step="1"
                                required
                                style={{ width: "3em" }} />
                            Quantity</label>

                        <button type="submit">Purchase</button>

                    </form>
                   
                </section>
            </div> 
            
           



        </div>
    )

}


// const mapStateToProps = ({ store, frame }) => {
//     return {
//         quantity: store.quantity,
//         isAdmin: frame.isAdmin,
//         adminForm: false,


//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {

        addToCart: (item, input) => dispatch(actions.addToCart(item, input)),
    }
}

export default connect(null, mapDispatchToProps)(Card)
