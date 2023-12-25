
//packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

//component
import { cities  } from "../Component/Area";

//
import config from "../config.json"

//css
import style from "../CSS/ConfirmOrderPage.module.css";


const ConfirmOrderPage = () => {
   
  //get cart items
  const Cart = useSelector((state)=>state.cart.Cart)

  //states
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [cart,setCart] = useState(Cart)
  const [name,setName] = useState("");
  const [number,setNumber]=useState("");
  const [alternative_number,setAlternative_number] = useState();
  const [city,setCity] = useState("");
  const [area,setArea] = useState("");
  const [details_address,setDetails_address] = useState("");

  //change city dynamically
  const handleCityChange = (e) => {
  const selectedCityName = e.target.value;
    setCity(selectedCityName)
    setSelectedCity(selectedCityName);
  };

  /*
  const handleConfirmOrder = () => {
    navigate('/admin/cc ', { state: {Cart}});
  };*/

  //place order function by post request 
  const handlePlaceOrder = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${config.apiUrl}/api/orders/order`,{
          cart,name,number,alternative_number,city,area,details_address
        })
        if(res.data.success){
          console.log('order is complete');
        }else{
          console.log(res.data.message);
        }
      } catch (error) {
         console.log(error);
      }
  } 


  return (
    <>
      <section className={style.confirm_order} >

          <form className={style.address_form} onSubmit={handlePlaceOrder} >
            
            <div>
            <input
              className={style.name}
              type="text"
              placeholder="enter your name"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            </div>

            <div>
              <input
                className={style.number}
                type="text"
                placeholder="enter your number"
                onChange={(e)=>setNumber(e.target.value)}
                required
              />
              <input
                className={style.alter_number}
                type="text"
                placeholder="enter your alternative number"
                onChange={(e)=>setAlternative_number(e.target.value)}
              />
            </div>

            <div>
              <select name="" id="" onChange={handleCityChange}>
                {Object.keys(cities).map((cityName, i) => {
                  return (
                    <React.Fragment key={i}>
                      <option value={cityName}>{cityName}</option>
                    </React.Fragment>
                  );
                })}
              </select>

              <select name="" id="" onChange={(e)=>setArea(e.target.value)}>
                <option value="">Area</option>
                {selectedCity &&
                  cities[selectedCity].map((area, i) => (
                    <option key={i} value={area}>
                      {area}
                    </option>
                  ))}
              </select>
            </div>

            <input
              className={style.comment}
              type="text"
              placeholder="Enter your details address here"
              onChange={(e)=>setDetails_address(e.target.value)}
              required
            />

          {/* <div className={style.payment_methods}>
              <div> <img className={style.cod_img} src="cod.jpg" alt="" /></div>
             <div> <img className={style.bkash_img} src="bkash.png" alt="" /></div>
             <div> <img className={style.nagad_img} src="nagad.png" alt="" /></div>
                  </div>*/}


          <div className={style.check_terms_And_confirm_btn}>
              <div>
                <input
                  type="checkbox"
             
                />
                <span htmlFor="">
                  please check our <Link to="/">terms and condition</Link> for
                  better experience
                </span>
              </div>

              <div>
              <button type="submit" disabled={isCheck} className={style.confirm_order_btn} >
            confirm order
          </button>
              </div>
            </div>


          </form>

 

      </section>
    </>
  );
};

export default ConfirmOrderPage;
