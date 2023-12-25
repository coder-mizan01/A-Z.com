import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Memory_Card = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter memory_card from products
       let memory_card = products.filter((pro)=>{
        return pro.subcategory === "memory_card";
       })
  return (
    <>
    <CategoryPage products={memory_card} />
       </>
  )
}

export default Memory_Card