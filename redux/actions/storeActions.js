import { ADD_TO_CART, HANDLE_DELETE, LESSEN_QUANTITY,INCREASE_QUANTITY, } from "../types"
// import { v4 as uuid } from "uuid"



export const addToCart = (item, input) => {
    let items = Object.assign({}, item)
    // items.id = uuid()
    // items.alt = item.alt
    items.quantity = input.value
//    console.log(items.alt)
    return {
        type: ADD_TO_CART,
        payload: items,
    }
}

export const removeProduct = (item) => {
    return {
        type: HANDLE_DELETE,
        payload: item.id,
    }
}
// mrPipes code

export const lessenQuantity = (id) =>{
    return {
        type: LESSEN_QUANTITY,
        payload: id
    }
}
export const increaseQuantity = (id) =>{
    return {
        type: INCREASE_QUANTITY,
        payload: id
    }
}
