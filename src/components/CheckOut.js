import React, { useDebugValue } from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import checkout from '../img/checkout.jpg'
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function CheckOut() {
  const [{basket,user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="ckeckout_left">
        <img src="https://dealgyan.com/wp-content/uploads/2021/06/Amazon-Upcoming-Sale-Date.png" alt="" className='checkout_add'/>
      <div>
        <h3>Hello, {!user?'Guest' : user.email}</h3>
        <h2 className='checkout_title'>Your shopping Basket</h2>
        {basket.map(item =>(
         <CheckoutProduct
         id={item.id}
         title={item.title}
         image={item.image}
         price={item.price}
         rating={item.rating}
          />
        ))}
   
      </div>
      </div>

      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default CheckOut
