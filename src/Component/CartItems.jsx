import React from 'react';

import config from "../config.json"

import { DeleteFromCart } from '../Redux/CartItem';
import { useDispatch } from 'react-redux';

const CartItems = ({_id,price,quantity,title}) => {

  const dispatch = useDispatch();
  const handleDelete = () => {
  dispatch(DeleteFromCart(_id))
  }


  return (
    <>
          <div className='cart-heading'> 
          <div className='cart-product'>
          <img src={`${config.apiUrl}/api/product/product-photo/${_id}`} alt="" />
           <img src='icon_trash.png' className='detele_icon_img' onClick={handleDelete} ></img>   
          </div>
         

          <p>{price}</p>
          <p className='pro-quantity'>{quantity}</p>
          <p>{price*quantity}</p>
          </div>


    </>
  )
}

export default CartItems