import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const PenDrive = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter pen_drive from products
       let pen_drive = products.filter((pro)=>{
        return pro.subcategory === "pen_drive";
       })
  return (
    <>
    <CategoryPage products={pen_drive} />
       </>
  )
}

export default PenDrive