import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Emergency_Light = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter emergency_light from products
       let emergency_light = products.filter((pro)=>{
        return pro.subcategory === "emergency_light";
       })
  return (
    <>
    <CategoryPage products={emergency_light} />
       </>
  )
}

export default Emergency_Light