import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Neckbands = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter neckbands from products
       let neckbands = products.filter((pro)=>{
        return pro.subcategory === "neckbands";
       })
  return (
    <>
    <CategoryPage products={neckbands} />
       </>
  )
}

export default Neckbands