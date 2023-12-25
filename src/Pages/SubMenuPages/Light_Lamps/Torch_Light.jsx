import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Torch_Light = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let torch_light = products.filter((pro)=>{
        return pro.subcategory === "torch_light";
       })
  return (
    <>
 <CategoryPage products={torch_light} />
    </>
  )
}

export default Torch_Light