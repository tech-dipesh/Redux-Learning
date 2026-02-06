import {createStore, combineReducers} from "redux";
import Data from "./data.js"
import cartReducer, { ADD_CART, addSingleCart, DECREASE_CART_QUANTITY, decreaseCartQuantity, INCREASE_CART_QUANTITY, increaseCartQuantity, REMOVE_CART, removeSingleCart } from "./slices/cartSlices.js"
import productReducer, { actionproductReducer, ADD_PRODUCT, addProductQuantity, addProductsQuanttitys, PRODUCTS_ADD, PRODUCTS_REMOVE, REMOVE_PRODUCT, removeProductQuantity, removeProductsQuanttitys } from "./slices/productSlices.js";
import userReducer, { ADD_USER, addUser, REMOVE_USERS, removeUser } from "./slices/userSlices.js";
import wishListReducer, { ADD_WISHLIST, addWishlist, REMOVE_WISHLIST, removeWishlist } from "./slices/wishlistSlices.js";
import { produce } from "immer";
import { configureStore } from "@reduxjs/toolkit";

const reducer=combineReducers({
  allProductList: productReducer,
  allCartList: cartReducer,
  allUserListsss: userReducer,
  allWishList: wishListReducer,
})

// currying function
// function logger(store){
//   return function (next){
//     return function (action){
//       console.log('action', action)
//       console.log('store', store)
//       console.log('next', next);
//       next(action)
//     }
//   }
// }
// logger(a)(b)(c);



export const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.dir(configureStore({reducer}));
// const modifiedUser=produce(objectList, (copyUser)=>{
//   console.log(copyUser);
//   copyUser.Age=35;
// })

// console.log(objectList);
// console.log(modifiedUser);