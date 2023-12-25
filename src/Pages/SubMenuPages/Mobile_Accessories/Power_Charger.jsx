import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Power_Charger = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter power_charger from products
       let power_charger = products.filter((pro)=>{
        return pro.subcategory === "power_charger";
       })
  return (
    <>
    <CategoryPage products={power_charger} />
       </>
  )
}

export default Power_Charger