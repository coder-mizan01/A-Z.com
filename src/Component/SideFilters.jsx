import React from "react";

//css
import SideFilterCSS from "../CSS/SideFilters.module.css";


import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter"

const SideFilters = ({ products }) => {


  return (
    <>
      <div className={SideFilterCSS.side_filters}  >
        <BrandFilter products={products} />
        <RatingFilter />
      </div>
    </>
  );
};

export default SideFilters;
