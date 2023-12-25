import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Vaccum_Flask = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter vacuum_flask from products
       let vacuum_flask = products.filter((pro)=>{
        return pro.subcategory === "vacuum_flask";
       })
  return (
    <>
    <CategoryPage products={vacuum_flask} />
       </>
  )
}

export default Vaccum_Flask