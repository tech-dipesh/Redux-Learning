import { produce } from "immer"
import data from "../data"

export const ADD_WISHLIST='wishlist/add'
export const REMOVE_WISHLIST='wishlist/remove'

export function addWishlist(payloadData){
  return {
    type: ADD_WISHLIST, payload: payloadData
  }
}
export function removeWishlist(id){
  return {
    type: REMOVE_WISHLIST, payload: id
  }
}

export default function wishListReducer(originalState=[], action){
  return produce(originalState, (proxyArray)=>{
    const findThatIndex=proxyArray.findIndex(s=>s.id===action.payload.id)
    switch (action.type){
      case ADD_WISHLIST:  
        if(findThatIndex) return [...proxyArray]
        proxyArray.push(action.payload)
        break;
      case REMOVE_WISHLIST:
        proxyArray.splice(findThatIndex, 1);
        break;
      }
    return proxyArray;
    })
}

// Immutable way: 
// export function wishListReducer(state=[], action){
//   console.log(action.payload);
//    switch (action.type){
//         case ADD_WISHLIST:
//         const didExist=state.find(s=>s.id===action.payload.id);
//         if(didExist){
//           return [...state]
//         }
//         return [
//           ...state,
//           action.payload
//         ]
//       case REMOVE_WISHLIST:
//         return [state.filter((cart)=>cart?.id!==action?.payload.id)]
//       default:
//         return state;
//   }
// }