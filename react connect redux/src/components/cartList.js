import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCartQuantity, increaseCartQuantity, removeEntireCart, removeSingleCart } from '../../store/slices/cartSlices';

export default function CartItem({id, title, rating, price, thumbnail, quantity }) {
  const dispatch=useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={thumbnail} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={()=>dispatch(decreaseCartQuantity(id))}>-</button>
        <span>{quantity || 0}</span>
        <button onClick={()=>dispatch(increaseCartQuantity(id))}>+</button>
        <button onClick={()=>dispatch(removeEntireCart(id))}>Remove</button>
      </div>
      <div className="item-total">${quantity * price}</div>
      {/* <div className=''>hello</div> */}
    </div>
  )
}