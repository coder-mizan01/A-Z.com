import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Wireless_charger = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter wireless_charger from products
       let wireless_charger = products.filter((pro)=>{
        return pro.subcategory === "wireless_charger";
       })
  return (
    <>
    <CategoryPage products={wireless_charger} />
       </>
  )
}

export default Wireless_charger