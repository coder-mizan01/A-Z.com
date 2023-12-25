import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Karoke_Speaker = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter karaoke_speaker from products
       let karaoke_speaker = products.filter((pro)=>{
        return pro.subcategory === "karaoke_speaker";
       })
  return (
    <>
 <CategoryPage products={karaoke_speaker} />
    </>
  )
}

export default Karoke_Speaker