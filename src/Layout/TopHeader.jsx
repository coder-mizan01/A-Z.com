import React from 'react'
import { Link } from 'react-router-dom'

//global hook


//css
import TopHeaderCSS from "../CSS/TopHeader.module.css";


const TopHeader = () => {
 



  return (
    <>
  <section id={TopHeaderCSS.topheader}>

   <div className={TopHeaderCSS.topheader_leftside}>
    <Link to="/" onClick={()=>alert('please call by phone')}>Call: 01955058284</Link> 
    <Link  to={`/`} onClick={()=>window.alert('not yet tracking method please contact Customer Care')} >Track My Order</Link> 
   </div>

   <div className={TopHeaderCSS.topheader_rightside}>
   <Link target='blank' to={`https://www.facebook.com/a.to.z.bd.shop/`} >Customer Care</Link> 
    <Link to="/" >Language</Link> 


    
  {/* */}

   </div>
    




  


  </section>
    </>
  )
}

export default TopHeader