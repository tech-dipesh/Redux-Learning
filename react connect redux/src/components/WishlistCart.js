import React from 'react'
import { useDispatch } from 'react-redux'
import { addSingleCart, removeSingleCart } from '../../store/slices/cartSlices';
import { removeWishlist } from '../../store/slices/wishlistSlices';

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
      <div id="item-total" onClick={()=>dispatch(removeWishlist(id))}><button>Remove Wishlist</button></div>
    </div>
  )
}