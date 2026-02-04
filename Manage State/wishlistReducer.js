import data from "./data"

export const ADD_WISHLIST='wishlist/add'
export const REMOVE_WISHLIST='wishlist/remove'

export function addWishlist(payload){
  return {
    type: ADD_WISHLIST, payload
  }
}
export function removeWishlist(payload){
  return {
    type: REMOVE_WISHLIST, payload
  }
}

export default function wishListReducer(state=[], action){
   switch (action.type){
        case ADD_WISHLIST:
        return [
          ...state,
          data.find((single)=>single.id===action.payload)
        ]
      case REMOVE_WISHLIST:
        return [...state.filter((cart)=>cart.id!==action.payload)]
      default:
        return state;
  }
}