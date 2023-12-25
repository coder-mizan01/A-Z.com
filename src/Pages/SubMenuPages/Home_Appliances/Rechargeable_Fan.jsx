import React from 'react';

import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Rechargeable_Fan = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter rechargeablefan from products
       let rechargeablefan = products.filter((pro)=>{
        return pro.subcategory === "rechargeablefan";
       })
  return (
    <>
    <CategoryPage products={rechargeablefan} />
       </>
  )
}

export default Rechargeable_Fan