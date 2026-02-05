import data from "../data";
// This is the action types:
export const ADD_PRODUCT='product/add'
export const REMOVE_PRODUCT='product/remove'
export const PRODUCTS_ADD='product/add'
export const PRODUCTS_REMOVE='product/remove'

// This is the action creator:
export function addProductQuantity(payload){
  return {type:ADD_PRODUCT, payload}
}
export function removeProductQuantity(payload){
  return {type: REMOVE_PRODUCT, payload}
}
export function addProductsQuanttitys(payload){
  return {type: PRODUCTS_ADD, payload}
}
export function removeProductsQuanttitys(payload){
  return {type: PRODUCTS_REMOVE, payload}
}

// this is the reducer:
export default function productReducer(state=data, action){
  switch (action.type){
    case ADD_PRODUCT:
          return [...state, action.payload]
      case REMOVE_PRODUCT:
        return  [...state.filter(single=>single.id!==action.payload)]
      case PRODUCTS_ADD:
        return   [...state, ...action.payload]
      case PRODUCTS_REMOVE: 
      return [...state.filter(single=>!action.payload.includes(single.id))]
      default:
        return state
      }
}
