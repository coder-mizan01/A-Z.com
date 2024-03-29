import React, { useState } from "react";

import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

//sttyles
import HeaderCSS from "../CSS/Header.module.css";

//api
import config from "../config.json";
//icons
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state) => state.allproduct);
  
  //destructure property from object
  const { loading, products, error } = productsObj;

  //This function search products from the searchbar
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    const matchingProducts = products.filter((pro) => {
      return pro.title.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredProducts(matchingProducts);
  };

  //
  const navigate = useNavigate();
  const handleNavigate = (route) =>{
     navigate(route)
     window.location.reload();
  }
  
  return (
    <>
      <div className={HeaderCSS.searchBar}>
        <input
          type="text"
          placeholder="Search in A-Z"
          value={searchValue}
          onChange={handleSearch}
        />
        <button type="search">
          <IoMdSearch
            className={HeaderCSS.searchIcon}
            style={{ color: "white" }}
          />
        </button>
        {searchValue.length > 1 && (
          <div className={HeaderCSS.search_value}>
            {filteredProducts.map((product, index) => {
              let { _id, title ,price,slug } = product;
              return (
                <div  onClick={() => handleNavigate(`/SingleProduct/${slug}`)}  className={HeaderCSS.value} key={index}>

                  <div>
                  <p>{title}</p>
                  <p>{price} Tk</p>
                  </div>
                                    
                  <img
                    style={{ width: "50px", height: "auto" }}
                    src={`${config.apiUrl}/api/product/product-photo/${_id}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
