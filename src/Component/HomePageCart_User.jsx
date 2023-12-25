import React from 'react';

//css
import HeaderCSS from "../CSS/Header.module.css"

//packages
import { useSelector } from "react-redux";
import { NavLink,Link } from 'react-router-dom';

//icons
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const HomePageCart_User = () => {

    const Cart = useSelector((state)=> state.cart.Cart)

    const Authentication = useSelector((state)=> state.authentication);
  return (
    <>
       <div className={HeaderCSS.cart_user_div}>
          <div className={HeaderCSS.cart}>
            <NavLink to="/cart">
              <AiOutlineShoppingCart className={HeaderCSS.cartIcon} />
                {Cart.length !== 0 && <span> {Cart.length}</span>} 
            </NavLink>
          </div>

          <div className={HeaderCSS.user}>
              <Link to={Authentication.email && Authentication.password !== null ? '/dashboard' : '/login'}>
                <HiOutlineUser className={HeaderCSS.user_icon} />{" "}
              </Link>
          </div>
        </div>
    </>
  )
}

export default HomePageCart_User