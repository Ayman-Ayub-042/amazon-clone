import React, {useState} from 'react'
import axios from 'axios'
import './Payment.css'
import { NavLink, useNavigate } from "react-router-dom";
import { getBasketTotal } from '../reducer';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../StateProvider"
import CheckoutProduct from './CheckoutProduct';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { useEffect } from 'react';

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const history = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing]  = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
     const getClientSecret =async() => {
        const response = await axios.post(`/payment/create?total= ${getBasketTotal(basket) * 100}`
        );
        setClientSecret(response.data.clientSecret)
     }
     getClientSecret();
    }, [basket])

    console.log('the secret is >> ', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }

    const handleChange = event => {

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

        
    }

  return (
    <div className='payment'>
        <div className="payment_container">
            <h1>
                Checkout ( {<NavLink to="/checkout">{basket?.length} items</NavLink>} )
            </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>123 React Kane</p>
                    <p>Los Angeles, CA</p>
                </div>

            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
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
        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment_detail">
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className="payment_priceContainer">
                    <CurrencyFormat
      renderText={(value) => (
       <h3>Order Total: {value}</h3>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      /> 
      <button disabled={processing || disabled || succeeded}>
        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
      </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>

        </div>

       </div>

      
    </div>
  )
}

export default Payment
