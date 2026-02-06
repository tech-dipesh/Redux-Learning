import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
  name: 'product',
  initialState:{
    error: false,
    loading: false,
    initialList: []
  },
  reducers: {
      loadAllProducts(state, action){
        // state=action.payload;
        state.initialList=action.payload;
        state.error=true;
        state.loading=false;
      },
      loadingStatus(state,action){
        state.loading=action.payload;
      },
      errorDuringFetch(state, action){
        state.error=action.payload;
      }
  }
} )
export const {loadAllProducts, loadingStatus, errorDuringFetch}=slice.actions 
export default slice.reducer

export const productList=(state)=>state.allProductList.initialList
export const productFetching=(state)=>state.allProductList.loading
export const errorproblem=(state)=>state.allProductList.error