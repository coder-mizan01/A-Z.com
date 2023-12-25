import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const GamingContrller = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter gaming_controller from products
       let gaming_controller = products.filter((pro)=>{
        return pro.subcategory === "gaming_controller";
       })
  return (
    <>
    <CategoryPage products={gaming_controller} />
       </>
  )
}

export default GamingContrller