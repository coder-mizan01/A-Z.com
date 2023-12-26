import React from 'react';

//packages
import {Link} from "react-router-dom"

//css
import "../CSS/specification.css"

const Specification = () => {
  return (
    <>
    <div>
        <p>If you want to specification about this product message us</p>

        <div>
          <Link className='specification_button' target='blank' to={`https://www.facebook.com/a.to.z.bd.shop/`}>
          <img src="messenger(1).png" alt="" />
            </Link>
        </div>  
    </div>

    </>
  )
}

export default Specification