import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import CheckOut from './components/CheckOut'
import Login from './components/Login'
import Orders from './components/Orders';
import Payment from './components/Payment'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import {auth} from './firebase';
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51Lo9acCdJxd9hXnRJfXbrCHHAfyL4mZBlTv6TAI0frahX7xpWWUBYU0SvH50sUwHdhbtUdUkjKcFNs8xxZwh0qfw00KDXU2mcS");


function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(() =>{
auth.onAuthStateChanged(authUser =>{
  console.log('The user is >>>',authUser);
  if (authUser){
    dispatch({
      type: 'SET_USER',
      user:authUser
    })
  }else{
    dispatch({
      type: 'SET_USER',
    user: null
  })

  }
})
  }, [] )
  return (
    <Router>
    <div className="App">
    <Header/>
      <Routes>
      <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login/>}/>
      <Route path="/checkout" element={<><CheckOut/></>}/>
      <Route path="/payment" element={<><Elements stripe={promise}><Payment/></Elements></>}/>
      <Route path="/" element={<><Home/></>}/>
 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
