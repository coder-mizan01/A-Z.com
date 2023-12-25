import React from 'react';
//icons
import { ImArrowRight2 } from "react-icons/im";

//css
import "../CSS/Pagination.css"

const Pagination = ({Products}) => {

  return (
    <>
    {Products !== undefined ? <div className="pagination">
            <a href="/">{Products.subcategory}</a>
          </div> : ""  }
     
    </>
  )
}

export default Pagination