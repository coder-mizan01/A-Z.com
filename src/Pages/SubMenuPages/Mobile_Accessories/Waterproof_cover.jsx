import React from 'react';

import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Waterproof_cover = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter waterproof_cover from products
       let waterproof_cover = products.filter((pro)=>{
        return pro.subcategory === "waterproof_cover";
       })
  return (

    <>
 <CategoryPage products={waterproof_cover} />
    </>
  )
}

export default Waterproof_cover