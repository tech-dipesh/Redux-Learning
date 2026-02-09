import { useSelector } from "react-redux";
import CartList from "../components/cartList"
import { allCart } from "../../store/slices/cartSlices";
export default function Cart() {


  const dispatch=useSelector(allCart);


  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
          {/* <div className="quantity">Delete</div> */}
        </div>
        {dispatch.map(({ id, title, rating, price, imageUrl, quantity }, i) => (
          <CartList
            key={i}
            id={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">{Math.round(dispatch.reduce((accumulator, current)=>accumulator+(current.quantity*current.price), 0))*100/100}</div>
        </div>
      </div>
    </div>
  )
}