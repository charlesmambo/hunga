import React from 'react';
import  '../cart/Cart.css';
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
  return (
    <div className='cart'>
      <MdOutlineShoppingCart className='cart-icon'/>
      <small className='cart-text'>0</small>
    </div>
  )
}

export default Cart
