import React from 'react';

import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';


const Mouse_pad = () => {
     //receive productsObj from allproducts by useSelector
     const productsObj = useSelector((state) => state.allproduct);

     //destructure property from object
     const { loading, products, error } = productsObj;
   
     //filter smartphonesProducts from products
      let mouse_pad = products.filter((pro)=>{
       return pro.subcategory === "mouse pad";
      })
  return (
    <>
 <CategoryPage products={mouse_pad} />
    </>
  )
}

export default Mouse_pad