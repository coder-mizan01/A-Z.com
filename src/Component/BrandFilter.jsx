import React, { useState, useEffect } from 'react';

import SideFilterCSS from "../CSS/SideFilters.module.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
//
import { useDispatch } from "react-redux";

//actions
import {
  categoryWiseProductsAction,
  polobrand,
  nobrand,
  hpBrand,
  NestleBrand,
  PranBrand,
  TreateBrand
} from "../Redux/FilterProduct";

const BrandFilter = ({ products }) => {
  const [poloChecked, setPoloChecked] = useState(false);
  const [noBrandChecked, setNoBrandChecked] = useState(false);
  const [hpChhecked , sethpCheceked] = useState(false);
  const [NestleChecked , setNestleChecked] = useState(false);
  const [TreatChecked,setTreatChecked] = useState(false);
  const [pranChecked,setPranchecked] = useState(false)
  const [showbrand, setShowbrand] = useState(false);
   

  const dispatch = useDispatch();  

  useEffect(() => {
    if (poloChecked) {
      dispatch(polobrand(products));
    } else if (noBrandChecked) {
      dispatch(nobrand(products));
    }else if (hpChhecked) {
      dispatch(hpBrand(products));
    }else if (TreatChecked) {
      dispatch(TreateBrand(products));
    }else if (NestleChecked) {
      dispatch(NestleBrand(products));
    }else if(pranChecked){
      dispatch(PranBrand(products))
    }else {
      dispatch(categoryWiseProductsAction(products));
    }
  }, [dispatch, poloChecked, noBrandChecked,hpBrand,NestleChecked,TreatChecked,pranChecked]);

  const handleBrand = (brand) => {
    if (brand === "polo") {
      setPoloChecked(!poloChecked);
       setNoBrandChecked(false);
    } else if (brand === "no-brand") {
      setNoBrandChecked(!noBrandChecked);
      setPoloChecked(false);
      setPranchecked(false);
    }else if (brand === "hp"){
       sethpCheceked(!hpChhecked);
    }else if (brand === "Treate") {
      setTreatChecked(!TreatChecked);
      setNestleChecked(false)
    } else if (brand === "Nestle") {
      setNestleChecked(!NestleChecked)
      setTreatChecked(false);
    }else if (brand === "pran") {
      setPranchecked(!pranChecked)
      setNoBrandChecked(false)
    }
  };

  return (
    <>
      <div
        className={`${SideFilterCSS.filter_by_brands} ${
          showbrand && `${SideFilterCSS.brands_collapse}`
        }`}  
      >
        <div className={SideFilterCSS.toggle_div} onClick={() => {
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
           return <div className={SideFilterCSS.brand} key={index}>
            <input
             type="checkbox"
              checked={
              (uniqueBrand === "polo" && poloChecked) ||
              (uniqueBrand === "no-brand" && noBrandChecked) ||
              (uniqueBrand === "hp" && hpChhecked) || 
              (uniqueBrand === "Nestle" && NestleChecked) || 
              (uniqueBrand === "Treate" && TreatChecked) || 
              (uniqueBrand === "pran" && pranChecked)
            }
             className={SideFilterCSS.brand_checkbox}
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
 