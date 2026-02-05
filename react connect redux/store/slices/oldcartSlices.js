import { produce } from "immer"
import data from "../data"
import { configureStore, createSlice } from "@reduxjs/toolkit"

// action types
export const ADD_CART='cart/add'
export const REMOVE_CART='cart/remove'
export const INCREASE_CART_QUANTITY='cart/addCarts'
export const DECREASE_CART_QUANTITY='cart/removeCarts'

// action creator:
export function addSingleCart(productData){
  return {
    type: ADD_CART, payload: productData
  }
}

export function removeEntireCart(id, quantity=1){
  return {
    type: REMOVE_CART, payload:{id}
  }
}
export function increaseCartQuantity(id){
  return {
    type: INCREASE_CART_QUANTITY, payload: {id}
  }
}
export function decreaseCartQuantity(id){
  return {
    type: DECREASE_CART_QUANTITY, payload: {id}
  }
}


// produce method:
export default function cartReducerImmer(originalState=[], action){
  return produce(originalState, (proxyArray)=>{
    const findThatValue=originalState.findIndex(state=>state.id===action.payload.id)
    switch(action.type) {
      case ADD_CART:
        if(findThatValue!==-1){
          proxyArray[findThatValue].quantity+=1;
         break
        }
      proxyArray.push({...action.payload, quantity: 1})
     break
      case REMOVE_CART:
        proxyArray.splice(findThatValue, 1)
        return proxyArray
      case INCREASE_CART_QUANTITY:
        proxyArray[findThatValue].quantity+=1;
       break
        case DECREASE_CART_QUANTITY:
        proxyArray[findThatValue].quantity-=1;
        if(proxyArray[findThatValue].quantity===0) proxyArray.splice(findThatValue, 1)
       break
      default:
       break
          }
          return proxyArray;
      })
}



// manual way of writing with immutable way.
export  function cartReducer(state=[], action){
  switch (action.type){
       case ADD_CART:
        const doesExist=state.find(st=>st.id===action.payload.id);
        if(doesExist){
          return state.map((st)=>st.id===doesExist.id?{...st, quantity: st.quantity+1}:st);
        }
        return [...state, {...action.payload, quantity: 1}]
        // check base case and also filter if any undefined boolena remove those.
      case REMOVE_CART:
      return state.map(item =>
  item.id === action.payload.id
    ? item.quantity - 1 <= 0
      ? null  
      : { ...item, quantity: item.quantity - 1 } 
    : item 
).filter(Boolean);
      case INCREASE_CART_QUANTITY: 
      return  [...state, action.payload]
  default:
    return state
  }
}