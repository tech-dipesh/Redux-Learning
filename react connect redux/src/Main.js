import { createRoot } from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "../store/index"
import { createBrowserRouter, RouterProvider } from "react-router"
import Cart from "./pages/Cart.js"
import Alllist from "./pages/Alllist.js"
import WishList from "./pages/wishList.js"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Alllist /> 
      },
      {
        path: '/cart',
        element: <Cart /> 
      },
      {
        path: '/wishlist',
        element: <WishList  /> 
      }
    ]
  }
])

createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)