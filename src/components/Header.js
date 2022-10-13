import React from 'react'
import './Header.css'
import img from '../img/amazon.png'
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from "../StateProvider"
import {auth} from "../firebase";

function Header() {
  const[{basket, user},dispatch]= useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <NavLink to="/">
      <img src={img} alt="" className='header_logo' />
      </NavLink>
      <div className='header_search'>
        <input className='header_searchInput' type="text" />
        <SearchIcon className="header_searchIcon"/>
      </div>

    <div className='header_nav'>
      <NavLink to={!user && "/login"}>
         <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello, {!user?'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
         </div>
         </NavLink>
         <div className="header_option">
         <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">Orders</span>
         
         </div>
         <div className="header_option">
         <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
         </div>
         <NavLink to="/checkout">
         <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className="header_optionLineOne header_basketCount">{basket?.length}</span>

         </div>
         </NavLink>

    </div>
    </div>
  )
}

export default Header
