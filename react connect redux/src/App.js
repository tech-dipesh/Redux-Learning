import "./App.css"
import { useSelector } from 'react-redux';
import Product from './components/ProductCard';
import Header from "./components/Header"
import { Outlet } from 'react-router';
export default function App() {
  // console.log('not recommend way', store.getState().allProductList);
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
