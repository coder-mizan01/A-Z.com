import React from 'react'

//packages
import { Link } from 'react-router-dom';

//icons
import {AiOutlineHome,AiOutlineShoppingCart} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {HiOutlineMenu} from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";


//css
import "../CSS/BottomMenu.css"


const BottomMenu = () => {
  return (
    <>
    <section id='bottom-menu'>

           <Link to='/'><AiOutlineHome className='icon' /></Link>
            <Link to='/mobile-menu'><HiOutlineMenu className='icon' /></Link>
            <Link to={`https://www.facebook.com/a.to.z.bd.shop/`} target='blank' ><RiCustomerService2Fill className='icon' /> </Link>
            <Link to='/cart'><AiOutlineShoppingCart className='icon' /></Link>
            <Link to='/dashboard'><BiUserCircle className='icon'/></Link>

    </section>
    </>
  )
}

export default BottomMenu