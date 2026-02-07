import { useDispatch } from "react-redux";
import { errorDuringFetch, loadAllProducts, loadingStatus } from "../slices/productSlices";

export const apiMiddleware=(store)=>(next)=>(action)=>{
  const {dispatch}=store
  const  START_URL='https://fakestoreapi.com';
  if(action.type=='api/REQUEST'){
    const {url, onSuccess, onError, onLoader}=action.payload;
    console.log(`${START_URL}/${url}`);
    dispatch({type: onLoader, payload: true})
    fetch(`${START_URL}/${url}`)
    .then(t=>t.json())
    .then(data=> {
      dispatch({
        type: onSuccess,
        payload: data
      })
      dispatch({type: onLoader, payload: false})
      dispatch({type: onError , payload: false})
    })
    .catch(err=> {
      console.log('catch block', err)
      // dispatch(onError(true),
      // dispatch({payload: onError, payload: true}),
      // dispatch({payload: onLoader, payload: false})
    }
    )
  }
  next(action)
}

export const fetchApiCall=(payload)=>({type: 'api/REQUEST', payload})