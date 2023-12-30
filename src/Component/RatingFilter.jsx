import React from 'react';


import classes from "../CSS/SideFilters.module.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const RatingFilter = () => {

  

  return (
    <>
 
   <div className={classes.filter_by_rating} onClick={()=>alert('feauter will be updated')} >
      <div className={classes.toggle_div}>
        <h5>Rating</h5>
        <FontAwesomeIcon  icon={faChevronDown} />
      </div>

      <div className={classes}>
          
      </div>
   </div>

    </>
  )
}

export default RatingFilter