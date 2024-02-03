import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Toy = () => {

          //receive productsObj from allproducts by useSelector
          const productsObj = useSelector((state) => state.allproduct);

          //destructure property from object
          const { loading, products, error } = productsObj;
        
          //filter toys from products
           let toys = products.filter((pro)=>{
            return pro.subcategory === "toys";
           })


  return (
    <>
            <CategoryPage products={toys} />
    </>
  )
}

export default Toy