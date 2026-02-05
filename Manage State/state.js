import {createStore, combineReducers} from "redux";
import Data from "./data.js"
import cartReducer, { ADD_CART, addSingleCart, DECREASE_CART_QUANTITY, decreaseCartQuantity, INCREASE_CART_QUANTITY, increaseCartQuantity, REMOVE_CART, removeSingleCart } from "./cartReducer.js"
import productReducer, { actionproductReducer, ADD_PRODUCT, addProductQuantity, addProductsQuanttitys, PRODUCTS_ADD, PRODUCTS_REMOVE, REMOVE_PRODUCT, removeProductQuantity, removeProductsQuanttitys } from "./productReducer.js";
import userReducer, { ADD_USER, addUser, REMOVE_USERS, removeUser } from "./userReducer.js";
import wishListReducer, { ADD_WISHLIST, addWishlist, REMOVE_WISHLIST, removeWishlist } from "./wishlistReducer.js";

const reducer=combineReducers({
  allProductList: productReducer,
  allCartList: cartReducer,
  allUserList: userReducer,
  allWishList: wishListReducer,
})


const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
// store.dispatch({type: ADD_PRODUCT, payload: 'Onion'})
store.dispatch(addProductQuantity('Mango'))
store.dispatch(removeProductQuantity(1))
store.dispatch(addProductsQuanttitys([
  {id: 39, name: "Jhandu Baam", price: 399, Area: "Madhesh"},
  {id: 43, name: "Nimbu Paani", price: 249, Area: "Gandaki"}
]))
store.dispatch(removeProductsQuanttitys([2, 3, 5]))

store.dispatch(addSingleCart(7))
store.dispatch(addSingleCart(12))
store.dispatch(addSingleCart(15))
store.dispatch(removeSingleCart(12))
store.dispatch(increaseCartQuantity([2, 5, 8]))
store.dispatch(decreaseCartQuantity([8]))


store.dispatch(addUser({id: 1, name: 'Dipesh'}))
store.dispatch(addUser({id: 7, name: 'Bikash'}))
store.dispatch(addUser({id: 3, name: 'Rohit'}))
store.dispatch(addUser({id: 2, name: 'Rohit'}))
store.dispatch(removeUser([3, 5]))

store.dispatch(addWishlist(10))
store.dispatch(addWishlist(13))
store.dispatch(addWishlist(15))
store.dispatch(removeWishlist(13))

console.log(store.getState());
