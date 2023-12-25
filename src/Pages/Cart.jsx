import React,{useEffect} from "react";

//packages
import {Link} from "react-router-dom";

//css
import "../CSS/Cart.css";

//component
import CartItems from "../Component/CartItems"

import { useSelector} from "react-redux";



const Cart = () => {

    const Cart = useSelector((state)=> state.cart.Cart)
    console.log(Cart);

    // Save cart to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(Cart));
    }, [Cart]);



  //calculate the total price
  let totalprice = 0;
  Cart.forEach((curElm) => {
    totalprice += curElm.price * curElm.quantity;
  });

  return (
    <>
      {Cart.length === 0 ? (
          <>
          <div  className="empty-cart-div">
          <img src="empty-cart.svg" alt="" style={{width:"200px",height:'auto'}} />
          <h1 >Cart is empty</h1>
          <Link to='/'>please add items to the cart</Link>
        </div>
          </>
      ) : (
        <div className="cart">
          <div className="cart-heading">
            <p className="">product</p>
            <p className="cart-price">Price</p>
            <p className="cart-quantity">Quantity</p>
            <p className="cart-subtotal">Subtotal</p>
          </div>

          <div className="cart-items">
            {Cart.map((curElm, index) => {
              return <CartItems key={index} {...curElm} />;
          })}
          </div>
 
          <div className="cart-total-value">
            <div className="cart-total"> 
              <div className="SubTotal">Product Price: {totalprice}</div> 

              {/*<div className="total"> total :{totalprice + Shipping}</div> */}
              <div className="place_order"> 
                <Link to='/confirm-order' className="place_order_btn">Select Your Area</Link>
              </div>
            </div>
          </div>

          
        </div>
          )}
    </>
  );
};

export default Cart;
