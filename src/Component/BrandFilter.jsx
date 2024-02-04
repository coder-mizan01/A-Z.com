import React, { useState, useEffect } from 'react';

import "../CSS/SideFilters.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
//
import { useDispatch } from "react-redux";

//actions
import {
  categoryWiseProductsAction,
  HavitBrand,
  HocoBrand,
  FantechBrand
} from "../Redux/FilterProduct";

const BrandFilter = ({ products }) => {
  const [showbrand, setShowbrand] = useState(false);
  const [HavitChecked , setHavitChecked] = useState(false);
  const [HocoChecked,setHocoChecked] = useState(false);
  const [FantechChecked, setFantechChecked] = useState(false);
   

  const dispatch = useDispatch();  

  useEffect(() => {
     if(HavitChecked){
      dispatch(HavitBrand(products))
    }
    if(HocoChecked){
      dispatch(HocoBrand(products))
    }
    if(FantechChecked) {
      dispatch(FantechBrand(products))
    }
    else {
      dispatch(categoryWiseProductsAction(products));
    }
  }, [dispatch, HavitChecked,HocoChecked,FantechChecked]);


  
  const handleBrand = (brand) => {
    if (brand === "Havit") {
      setHavitChecked(!HavitChecked)
    }
    if(brand === "Hoco"){
      setHocoChecked(!HocoChecked)
    }
    if(brand === "Fantech"){
      setFantechChecked(!FantechChecked)
    }
  };

  return (
    <>
      <div
        className={`filter_by_brands ${
          `${showbrand && `brands_collapse`}`
        }`}  
      >
        <div className={`toggle_div`} onClick={() => {
          setShowbrand(!showbrand);
        }}>
          <h5>Brands</h5>
          {showbrand ? (
            <FontAwesomeIcon
              icon={faChevronUp}
  
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
            />
          )}
        </div>


        {[...new Set(products.map((product) => product.brand))].map((uniqueBrand,index)=>{
           return <div className={`brand`} key={index}>
            <input
             type="checkbox"
              checked={
              (uniqueBrand === "Havit" && HavitChecked) ||
              (uniqueBrand === "Hoco" && HocoChecked) || 
              (uniqueBrand === "Fantech" && FantechChecked) 
            }
             className={`brand_checkbox`}
             onChange={() => handleBrand(uniqueBrand)}
           />
           <label htmlFor="">{uniqueBrand}</label>
           </div>
        })}
      
      </div>
    </>
  );
};

export default BrandFilter;
 