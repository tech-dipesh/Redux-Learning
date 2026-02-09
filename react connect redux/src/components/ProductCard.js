import { useDispatch } from "react-redux"
import {addSingleCart, removeSingleCart} from "../../store/slices/cartSlices"
import { addWishlist } from "../../store/slices/wishlistSlices";
export default function Product({ id, title, rating, price, thumbnail }) {
  const dispatch=useDispatch();
  return (
    <div className="product">
      <div className="product-image">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">{price}</p>
      </div>
      <div className="cta-container">
        <button onClick={()=>dispatch(addSingleCart({id, title, rating, price, thumbnail}))}>Add to Cart</button>
        <button onClick={()=>dispatch(addWishlist({id, title, rating, price, thumbnail}))}>Move to Wishlist</button>
        {/* <button>Buy Now</button> */}
      </div>
    </div>
  )
}