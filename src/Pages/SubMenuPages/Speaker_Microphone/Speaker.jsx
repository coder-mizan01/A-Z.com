import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Speaker = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter speaker from products
       let speaker = products.filter((pro)=>{
        return pro.subcategory === "speaker";
       })
  return (
    <>
    <CategoryPage products={speaker} />
       </>
  )
}

export default Speaker