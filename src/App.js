import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { useEffect } from 'react';
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"
import Payment from './Payment';
import {loadStripe} from"@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Subheader from './Subheader';
import 'bootstrap'
import Footer from './Footer';
import Product_info from './Product_info';
import Boxchat from './Boxchat';

const promise = loadStripe(
  "pk_test_51KoqMpFR3MINBE7WWCc0ydm4SiJmAL4mZsgIoQYTsqrQeTzN6IKqxGt5M4sLWua5t0dflM9Vyj5jTHFzCH5rauyg00DR65f33X"
);
function App() {
  const[{basket},dispatch] = useStateValue();
 

  // useEffect(() => {
  //   window.localStorage.setItem('basket', basket);
  // }, [basket]);
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('The user is >>>',basket);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    ///BEM
    <Router>
      <div className="app">
      <Boxchat/>

          <Routes>
            <Route exact path="/" element={<><Header/><Subheader/><Home/><Footer/></>}/>
            <Route exact path="/checkout" element={<>
              <Header/>
              <Checkout />
            </>}/>
            <Route exact path="/login" element={<><Login/></>}/>
            <Route exact path="/in4" element={<><Header/><Product_info/><Footer/></>}/>
            <Route exact path="/payment" element={<>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
            </>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
