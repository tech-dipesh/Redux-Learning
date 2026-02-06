import { produce } from "immer"
import data from "../data"
import { createSlice } from "@reduxjs/toolkit"

const slices=createSlice({
  name: 'wishlist',
  initialState: [],
  reducers:{
    addWishlist(state, action){
    const findThatIndex=state.findIndex(s=>s.id===action.payload.id)
    if(findThatIndex===-1)state.push(action.payload)
    },
  removeWishlist(state, action){
    const findThatIndex=state.findIndex(s=>s.id===action.payload.id)
      state.splice(findThatIndex, 1);
    }
  }
})

export const {addWishlist, removeWishlist}=slices.actions;
export default slices.reducer

export const allWish=state=>state.allWishList