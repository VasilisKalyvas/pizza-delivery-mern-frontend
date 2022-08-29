import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {FaMinus, FaPlus, FaTrash, } from 'react-icons/fa'
import {addToCart, deleteFromCart} from '../actions/cartActions'
import { MdDeliveryDining } from 'react-icons/md'
import Checkout from '../components/Checkout'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const dispatch = useDispatch()
  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)

  return (
    <div className='container row justify-content-center'>

      <div className='col-md-6'>
        <h2 style={{fontSize: '40px'}}>My Cart</h2>
        <br></br>
        <br></br>
        <br></br>
        {cartItems.map(item => {
          return(
            <>
          <div className='flex-container'>
            <div className='text-left m-1 w-100'>
              <h1>{item.name} [{item.varient}]</h1>
              <h1>Price : {item.quantity}* {item.prices[0][item.varient]} = {item.price}</h1>
              <h1 style={{display: 'inline'}}>Quantity :</h1> 
              <FaPlus style={{color: 'green', cursor: 'pointer'}} onClick={() => dispatch(addToCart(item, item.quantity+1, item.varient))}/> 
                {item.quantity} 
              <FaMinus style={{color: 'red', cursor: 'pointer'}} onClick={() => dispatch(addToCart(item, item.quantity-1, item.varient))}/>
              
            </div>
    
            <div className='w-100 m-1'>
              <img src={item.image} style={{height: '80px', width: '80px'}}/>
            </div>
    
            <div className='w-100 m-1'>
              <FaTrash className='mt-5' style={{color: 'red', cursor: 'pointer'}} onClick={() => dispatch(deleteFromCart(item))}/>
            </div>
          </div>
          <hr></hr>
        </>
          )
        })}
      </div>
      <div className='col-md-4'>
          <h2 style={{fontSize: '45px'}}>SubTotal: {subtotal} $</h2>
          <MdDeliveryDining style={{fontSize: '130px'}}/>
          <br></br>
          <Checkout subtotal={subtotal}/>
      </div>

    </div>
  )
}

export default Cart