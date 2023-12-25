import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Room_Heater = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let room_heater = products.filter((pro)=>{
        return pro.subcategory === "room_heater";
       })
  return (
    <>
    <CategoryPage products={room_heater} />
       </>
  )
}

export default Room_Heater