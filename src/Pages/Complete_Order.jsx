import React from 'react';

//packages
import {Link} from "react-router-dom";

//css
import "../CSS/Complete_Order.css"


const Complete_Order = () => {
  return (
    <>
     
     <div className='complete_order'>
        <h2>your order has been confirmed</h2>
         <p>contact with us about your order &nbsp; <Link target='blank' to={`https://www.facebook.com/a.to.z.bd.shop/`}>facebook</Link> </p>
     </div>
    
    </>
  )
}

export default Complete_Order