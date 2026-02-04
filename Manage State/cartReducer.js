import data from "./data"

export const ADD_CART='cart/add'
export const REMOVE_CART='cart/remove'
export const INCREASE_CART_QUANTITY='cart/addCarts'
export const DECREASE_CART_QUANTITY='cart/addCarts'


export function addSingleCart(payload){
  return {
    type: ADD_CART, payload
  }
}

export function removeSingleCart(payload){
  return {
    type: REMOVE_CART, payload
  }
}
export function increaseCartQuantity(payload){
  return {
    type: INCREASE_CART_QUANTITY, payload
  }
}
export function decreaseCartQuantity(payload){
  return {
    type: decreaseCartQuantity, payload
  }
}

export default function cartReducer(state=[], action){
  switch (action.type){
       case ADD_CART:
        return [
            ...state, data.find((single)=>single.id===action.payload)
          ]
      case REMOVE_CART:
        return [data.filter((cart)=>cart.id!==action.payload)]
      case INCREASE_CART_QUANTITY: 
      return  [...state, action.payload]
  default:
    return state
  }
}