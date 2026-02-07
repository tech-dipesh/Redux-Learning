import { apiMiddleware, logger } from "./Middleware/api.js";
import { thunk } from "./Middleware/thunk.js";
import cartReducer from "./slices/cartSlices.js"
import productReducer from "./slices/productSlices.js";
import userReducer from "./slices/userSlices.js";
import wishListReducer from "./slices/wishlistSlices.js";
import { configureStore } from "@reduxjs/toolkit";



export const store=configureStore({
  reducer:
  {
  allProductList: productReducer,
  allCartList: cartReducer,
  allUserListsss: userReducer,
  allWishList: wishListReducer,
},
middleware:()=> [apiMiddleware, thunk],
});
