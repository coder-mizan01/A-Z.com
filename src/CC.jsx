import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import slugify from "react-slugify";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "./config.json";
import { useParams } from "react-router-dom";
import "./CSS/cc.css";

const CC = () => {
  const state = useSelector((state) => state.authentication);

  const { slug } = useParams()
  const [orders, setOrders] = useState([]);

  //fetch handleOrder
  const handleOrder = async () => {
    try {
      const { data } = await axios.get(`${config.apiUrl}/api/orders/all-order`);
      if (data.success) {
        console.log("successfully fetch orders");
        setOrders(data.allOrder);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleOrder();
  }, []);
  

 console.log(orders);
  return (
    <>
      {state.role === 2 || state.role === 1 ? (
        <>
          {orders !== undefined
            && orders.map((order,i) => {
                let {cart,name,email,number,alternative_number,city,area,details_address} = order;
                return <div key={i} className="order">
                    <div className="customerdetails">
                      <p>{name}</p>
                      <p>{email}</p>
                      <p>{number}</p>
                      <p>{alternative_number !== '' && alternative_number}</p>
                      <p>{city}</p>
                      <p>{area}</p>
                      <p>{details_address}</p>
                    </div>
                    <div className="orderItems">
                       {cart.map((c,i)=>{
                        let {title,price,quantity} = c
                         return <div  key={i}>
                            <Link to={`/`} className="order_title">{title} <span className="order_quantity">{quantity}</span></Link>
                            <p className="order_price">{price}</p>
                     
                         </div>
                       })}
                    </div>
                  </div>

              })}
        </>
      ) : (
        <>
          <h2>wrong access</h2>
        </>
      )}
    </>
  );
};

export default CC;
