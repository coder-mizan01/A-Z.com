import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';


const Computer_Items = () => {
    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state) => state.computer_products);

    //destructure property from object
    const { loading, computer_items, error } = productsObj;


  return (
    <>
  <CategoryPage products={computer_items} />
    </>
  )
}

export default Computer_Items