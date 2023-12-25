import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Ring_Light = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let Mouse = products.filter((pro)=>{
        return pro.subcategory === "mouse";
       })
  return (
    <>
    <CategoryPage products={Mouse} />
       </>
  )
}

export default Ring_Light