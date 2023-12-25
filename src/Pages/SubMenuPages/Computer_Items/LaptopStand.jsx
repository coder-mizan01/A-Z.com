import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const LaptopStand = () => {
        //receive productsObj from allproducts by useSelector
        const productsObj = useSelector((state) => state.allproduct);

        //destructure property from object
        const { loading, products, error } = productsObj;
      
        //filter laptop_stands from products
         let laptop_stands = products.filter((pro)=>{
          return pro.subcategory === "laptop_stands";
         })
  return (
    <>
    <CategoryPage products={laptop_stands} />
    </>
  )
}

export default LaptopStand