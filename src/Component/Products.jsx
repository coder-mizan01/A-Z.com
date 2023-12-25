import React, { useEffect, useState } from 'react';
import config from "../config.json";

import { useDispatch , useSelector } from 'react-redux';
import {getProductsStart,getProductsFailure,getProductsSuccess} from "../Redux/AllProducts"

import {Link} from "react-router-dom";

import axios from 'axios';


//Global Hook





//component



const Products = () => {
  const dispatch = useDispatch();

   const getAllProducts = async () => {
       try {
        dispatch(getProductsStart())
         const {data} = await axios.get(`${config.apiUrl}/api/v1/product/get-product`);
         if(data.success){
          dispatch(getProductsSuccess(data.products))
           console.log("Products dispatched:", data.products);
         } 
       } catch (error) {
         console.log(error);
         dispatch(getProductsFailure({error : error.message}))
       }
   }

  /* useEffect(()=>{
   getAllProducts();
   },[])*/
   

   
    
  return (
    <>
   
    </>
  )
}

export default Products