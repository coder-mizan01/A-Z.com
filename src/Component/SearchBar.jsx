import React,{useState} from 'react';

import HeaderCSS from "../CSS/Header.module.css";

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { AiOutlineSearch,AiOutlineShoppingCart } from "react-icons/ai";
const SearchBar = () => {
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state)=> state.allproduct);
  //destructure property from object
   const {loading , products , error} = productsObj;
      //This function search products from the searchbar
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleSearch = (e) =>{
   const  inputValue = e.target.value;
    setSearchValue(inputValue);
      
    const matchingProducts = products.filter((pro)=>{
      return pro.title.toLowerCase().includes(inputValue.toLowerCase());
    })

    setFilteredProducts(matchingProducts);
  }

  

  return (
    <>
    <div className={HeaderCSS.searchBar}>
          <input type="text" placeholder="Search in shopee" value={searchValue}  onChange={handleSearch}  />
          <button type="search">
            <AiOutlineSearch
              className={HeaderCSS.searchIcon}
              style={{ color: "white" }}

            />
          </button>
          {searchValue.length > 1 && <div className={HeaderCSS.search_value}><ul> {filteredProducts.map((product,index) => (
          <li key={index}><Link to={`/SingleProduct/${product.slug}`}>{product.title}</Link></li>
          ))}</ul></div>} 
        </div>
    </>
  )
}

export default SearchBar