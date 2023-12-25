import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Books = () => {

      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter books from products
       let books = products.filter((pro)=>{
        return pro.category === "books";
       })
  
  return (
    <>
  <CategoryPage products={books} />
    </>
  )
}

export default Books