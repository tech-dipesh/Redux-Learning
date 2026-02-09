import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/ProductCard';
import { errorDuringFetch, loadAllProducts, loadingStatus,  } from '../../store/slices/productSlices';
import { errorproblem, productFetching, productList } from '../../store/slices/productSlices';
import { allCart, errorCart, loadingCart } from '../../store/slices/cartSlices';
// import { addSingleCart, setCartError, setCartLoading  } from '../../store/slices/cartSlices';
import {setCartError, setCartLoading} from "../../store/slices/cartSlices"
import { fetchApiCall } from '../../store/Middleware/api';

export default function Alllist() {
  const allProductList=useSelector(productList);
  const FetchingStatus=useSelector(productFetching)
  const errorStatus=useSelector(errorproblem)
  const dispatch=useDispatch()
  

  useEffect(()=>{
    dispatch(fetchApiCall({
      url: 'Products',
      onSuccess: loadAllProducts.type,
      onError: errorDuringFetch.type,
      onLoader: loadingStatus.type
    }
  ))
  // Reusable comps:
  dispatch(fetchApiCall({
    url: 'products/1',
    onSuccess: allCart.type,
    onError: setCartError.type,
    onLoader: setCartLoading.type
  }))


  
  // Old way:
  //   dispatch({type: 'api/REQUEST', payload: {
  //     url: 'products/1',
  //     onSuccess: allCart.type,
  //     onError: setCartError.type,
  //     onLoader: setCartLoading.type
  //   }
  // })
  }, [])

  console.log('fetch', FetchingStatus, 'erro', errorStatus, 'data', allProductList);
  return FetchingStatus?<h1>Loading...</h1>
  // : errorStatus===true?<h1>There's the network erorr request.</h1>
  : (
    <div>
    {
      allProductList.map(({id, title, price, rating, image})=>(
        <Product key={id} id={id} title={title} rating={rating} price={price} thumbnail={image}/> 
      ))
    }
    </div>
  )
}
