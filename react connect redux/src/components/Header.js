import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux';
import { Link } from 'react-router'
import { allCart } from '../../store/slices/cartSlices';
import { allWish } from '../../store/slices/wishlistSlices';
// import CartIcon from '../assets/cart-icon.svg'

export default function Header() {
    const allCartList=useSelector(allCart);
    const allWishList=useSelector(allWish);

  return (
    <header>
      <div className="header-contents">
          <FontAwesomeIcon color='red' icons={faCartArrowDown}/>
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/wishlist">
          <button>Wishlist</button>
          <FontAwesomeIcon icons={faAddressBook}/>
          <div className="cart-items-count">{allWishList.length}</div>
        </Link>
        
        <Link className="cart-icon" to="/cart">
          <button>Cart</button>
          <FontAwesomeIcon icons={faCartArrowDown}/>
          <div className="cart-items-count">{Math.round(allCartList.reduce((acc, all)=>acc+all.quantity, 0))*100/100}</div>
        </Link>
      </div>
    </header>
  )
}