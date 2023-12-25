import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Water_Heater = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter water_heater from products
       let water_heater = products.filter((pro)=>{
        return pro.subcategory === "water_heater";
       })
  return (
    <>
    <CategoryPage products={water_heater} />
       </>
  )
}

export default Water_Heater