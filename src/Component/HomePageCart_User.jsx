import React from 'react';

//css
import HeaderCSS from "../CSS/Header.module.css"

//packages
import { useSelector } from "react-redux";
import { NavLink,Link } from 'react-router-dom';

//icons
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";


const HomePageCart_User = () => {

    const Cart = useSelector((state)=> state.cart.Cart)

    const Authentication = useSelector((state)=> state.authentication);
  return (
    <>
       <div className={HeaderCSS.cart_user_div}>
          <Link  to="/cart" className={HeaderCSS.cart}>
              <AiOutlineShoppingCart className={HeaderCSS.cartIcon} />
                {Cart.length !== 0 && <span> {Cart.length}</span>} 
          </Link>

          <Link className={HeaderCSS.user} to={Authentication.email && Authentication.password !== null ? '/dashboard' : '/login'}>
              {Authentication.email && Authentication.password !== null ? <p className={HeaderCSS.user_name}>{Authentication.email.slice(0,1)}</p> : <FaRegUser className={HeaderCSS.user_icon} />}
          </Link>
        </div>
    </>
  )
}

export default HomePageCart_User