// import  { useEffect, useState } from 'react'
import React from 'react';
import CheckoutProduct from './CheckOutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import {Link,useNavigate} from 'react-router-dom'
// import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
// import CurrencyFormat from "react-currency-format"
// import axios from 'axios';
// import { getBasketTotal } from './reducer';
function Payment() {
//const history = useNavigate();
  const[{basket,user}] = useStateValue();

 
//   const handleSubmit = async(event) =>{
      
//   }
//   const handleChange =  event=>{
//         //do stripe
       
//   }
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} mặt hàng</Link>)
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Địa chỉ</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>L123 react Lane</p>
                    <p>Los Angeles,CA</p>
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review sản phẩm và giao hàng</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                   
                </div>
               
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Phương thức thanh toán</h3>
                </div>
                <div className='payment__details'>
                        {/* <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                    <>
                                        <h3>
                                        Tổng ({basket.length} mặt hàng): <strong>{value}</strong>
                                        <strong>.000</strong>
                                        </h3>
                                    
                                    </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"đ"}
                                />
                                
                            </div>
                          
                        </form> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment