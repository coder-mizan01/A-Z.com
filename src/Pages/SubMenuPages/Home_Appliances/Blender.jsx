import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Blender = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter blender from products
       let blender = products.filter((pro)=>{
        return pro.subcategory === "blender";
       })
  return (
    <>
 <CategoryPage products={blender} />
    </>
  )
}

export default Blender