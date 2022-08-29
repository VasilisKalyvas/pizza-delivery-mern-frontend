import React from 'react'
import {Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import {placeOrder} from '../actions/orderAction';

const Checkout = ({subtotal, cart}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const cartState = useSelector(state => state.cartReducer)
  const {cartItems} = cartState

    const tokenHandler = (token) =>{
        console.log(token);
        dispatch(placeOrder(token, subtotal));
    }
  return (
    <div>
      {currentUser  && cartItems.length !== 0  ? (<>
      
        <StripeCheckout 
        amount={subtotal * 100} 
        shippingAddress 
        token={tokenHandler}
        stripeKey='pk_test_51KxoQ8JOIPdCE2Z0ATbr2Sl0Zcet5wG7C2D3WKtxVBWo8Egjv4kHIUXoQDLW9vYyjvCGfMbgc0qR0xoQCq6mXaEx00SsAr8m6R'
        currency='USD'>
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
      
      </>): 
      (<>
        <button className='btn' disabled>Pay Now</button>
        <br></br>
        <br></br>
        {!currentUser ? (<Link to='/login' style={{textDecoration: 'underline'}}>Please Login or create an account!</Link>): null} 
         { cartItems.length === 0 ? (<p>Your Cart is Empty</p>):null}
      </>)}
        
        
    </div>
  )
}

export default Checkout