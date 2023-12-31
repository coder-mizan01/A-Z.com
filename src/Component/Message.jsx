import React from 'react';

//packages
import {Link} from "react-router-dom"

//css
import "../CSS/Message.css"

const Message = () => {
  return (
    <>

   <div className='Messeage w-100 d-flex justify-content-lg-end  justify-content-sm-start'>

   <div className="alert alert-primary w-lg-50 w-sm-100 text-lg-end text-sm-start p-0 mx-3" role="alert">
        <p className='p-3'>We have more products to see more,  message us on &nbsp;
        <Link target='blank' to={`https://www.facebook.com/a.to.z.bd.shop/`} className="messeage-btn" >facebook</Link></p>
     </div>
   </div>
    </>
  )
}

export default Message