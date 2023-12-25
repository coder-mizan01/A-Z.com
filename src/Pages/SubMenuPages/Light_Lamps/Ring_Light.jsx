import React from 'react';
import { useSelector } from "react-redux";

//components  
import CategoryPage from '../../../Component/CategoryPage';

const Ring_Light = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter ring_light from products
       let ring_light = products.filter((pro)=>{
        return pro.subcategory === "ring_light";
       })
  return (
    <>
    <CategoryPage products={ring_light} />
       </>
  )
}

export default Ring_Light