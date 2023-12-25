import React from 'react';

import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Bluthooth_Headphone = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter bluetooth_headphone from products
       let bluetooth_headphone = products.filter((pro)=>{
        return pro.subcategory === "bluetooth_headphone";
       })
  return (
    <>
 <CategoryPage products={bluetooth_headphone} />
    </>
  )
}

export default Bluthooth_Headphone