import React from 'react';

import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

export const ComputerGlass = () => {
//receive productsObj from allproducts by useSelector
const productsObj = useSelector((state) => state.allproduct);

//destructure property from object
const { loading, products, error } = productsObj;

//filter computer_glass from products
 let computer_glass = products.filter((pro)=>{
  return pro.subcategory === "computer_glass";
 })
        
  return (
    <>
  <CategoryPage products={computer_glass} />
    </>
  )
}

export default ComputerGlass;
