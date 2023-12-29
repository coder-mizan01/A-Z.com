import React from 'react';

//packages
import {Link} from "react-router-dom"

//css
import "../CSS/specification.css"

const Specification = () => {
  return (
    <>
    <div>
        <p>If you want to know specification about this product give a knock on facebook:</p>

        <div>
          <Link className='specification_button' target='blank' to={`https://www.facebook.com/a.to.z.bd.shop/`}>
             facebook
            </Link>
        </div>  
    </div>

    </>
  )
}

export default Specification