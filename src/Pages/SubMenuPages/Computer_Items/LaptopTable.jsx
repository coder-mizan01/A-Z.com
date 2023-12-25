import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const LaptopTable = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter laptop_table from products
       let laptop_table = products.filter((pro)=>{
        return pro.subcategory === "laptop_table";
       })
  return (
    <>
    <CategoryPage products={laptop_table} />
       </>
  )
}

export default LaptopTable