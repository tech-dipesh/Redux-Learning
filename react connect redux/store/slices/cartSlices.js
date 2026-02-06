import { createSlice } from "@reduxjs/toolkit"


const findIndexLogic=(state, action)=>{
  console.log('original data', state);
    const storeIndex=state.findIndex(o=>o.id===action.payload.id)
    return storeIndex;
}

const slice=createSlice({
  name: 'cart',
  initialState: {
    error: false,
    loading: false,
    state:[]
  },
  reducers: {
    updateInitalCartItems(state, action){
      console.log('initial action is', action);
        state.state.push(action)
    },
    setCartError(state, action){
      state.loading=false;
      state.error=action.payload
    },
    setCartLoading(state, action){
        state.loading=action.payload;
    },
    addSingleCart(state, action){
      const findIndex=findIndexLogic(state.state, action)
      if(findIndex!==-1){
        state.state[findIndex].quantity+=1;
      }
      state.state.push({...action.payload, quantity: 1})
    },
    removeEntireCart(state, action){
      const findIndex=findIndexLogic(state.state, action)
      state.state.splice(findIndex, 1)
    },
    increaseCartQuantity(){
      const findIndex=findIndexLogic(state.state, action)
      state.state[findIndex].quantity+=1;
    },
    decreaseCartQuantity(){
      const findIndex=findIndexLogic(state.state, action)
      state.state[findIndex].quantity-=1;
        if(state.state[findIndex].quantity===0) state.state.splice(findIndex, 1)
    }
  }
})
export const {addSingleCart, removeEntireCart, increaseCartQuantity, decreaseCartQuantity, updateInitalCartItems}=slice.actions;
export const {setCartError, setCartLoading}=slice.actions;

export const allCart=state=>state.allCartList.state;
export const loadingCart=state=>state.allCartList.loading
export const errorCart=state=>state.allCartList.error;


export default slice.reducer