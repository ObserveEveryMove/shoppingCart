
import { ADD_TO_CART, HANDLE_DELETE, INCREASE_QUANTITY, LESSEN_QUANTITY } from "../types"
import prod1 from "../..//data/product1.json"
import prod2 from "../../data/product2.json"
import prod3 from "../../data/product3.json"
import prod4 from "../../data/products4.json"
import { getNum } from "../../utilities/functions"







let initialState = {
    prod1,
    prod2,
    prod3,
    prod4,
    cart: [],
    total: 0,
    grandTotal: 0,
    tax: .1,
    appliedTax: 0,
}




const storeReducer = (state = initialState, action) => {
    //    console.log(state.prod1)

    const totalWithTax = (x) => {
        let answer = (x * state.tax + x).toFixed(2)
        return +answer
    }

    const calculateTax = (x) => {
        let answer = (x * state.tax).toFixed(2)
        return +answer
    }



    switch (action.type) {

        case ADD_TO_CART:

            // let testCart = [action.payload]

            // let findSame = state.cart.find(item=> item.id === testCart[0].id)

            let findSame = state.cart.find(item => item.id === action.payload.id)
            console.log(findSame)
            if (findSame) {

                // findSame.quantity = testCart[0].quantity
                findSame.quantity =  getNum(action.payload.quantity)
                // let price = getNum(findSame.price)
                // let addPrices = totalWithTax(price)
                // let addTax = calculateTax(price)
                return {
                    ...state,
                    cart: state.cart,
                    //    total: addPrices + state.total,
                    //    appliedTax: addTax + state.appliedTax
                }
            }

            else {


                let newCart = [...state.cart, action.payload]

                let newTotal = newCart.reduce((a, b) => a += (parseInt(b.quantity) * getNum(b.price)), 0)


                return {
                    ...state,
                    cart: newCart,
                    total: newTotal,
                    grandTotal: totalWithTax(newTotal),
                    appliedTax: calculateTax(newTotal),
                }
            }

        case HANDLE_DELETE:
            let others = state.cart.filter(item => item.id !== action.payload)

            let revisedCart = [...others]

            let revisedTotal = revisedCart.reduce((a, b) => a += (parseInt(b.quantity) * getNum(b.price)), 0)

            return {
                ...state,
                cart: others,
                total: revisedTotal,
                grandTotal: totalWithTax(revisedTotal),
                appliedTax: calculateTax(revisedTotal),
            }

        // mrPipes reducer code

        case INCREASE_QUANTITY:
            let price
            let incItem = state.cart.map(item => {
                if (item.id === action.payload) {
                    let incAmount = getNum(item.price)
                    item.quantity = getNum(item.quantity) + 1
                    price = incAmount
                }
                return item
            })
           
            let totals = totalWithTax(price)
            let taxApplied = calculateTax(price)
            return {
                ...state,
                cart: incItem,
                total: price,
                grandTotal: totals + state.total,
                // total: totals + state.total,
                appliedTax: taxApplied + state.appliedTax,

            }





        case LESSEN_QUANTITY:
            let lessPricey

            let oneLessItem = state.cart.map(item => {
                if (item.id === action.payload && getNum(item.quantity) > 1) {
                    let anAmount = getNum(item.price)
                    item.quantity = getNum(item.quantity) - 1 || 1
                    lessPricey = anAmount
                }
                return item
            })
            let subtractTotal = totalWithTax(lessPricey)
            let subtractTax = calculateTax(lessPricey)
            return {
                ...state,
                cart: oneLessItem,
                total: lessPricey ? state.total - lessPricey : state.total,
                grandTotal: lessPricey ? state.total - subtractTotal : state.total,

                appliedTax: lessPricey ? state.appliedTax - subtractTax : state.appliedTax,

            }

        default:
            return state
    }
}

export default storeReducer