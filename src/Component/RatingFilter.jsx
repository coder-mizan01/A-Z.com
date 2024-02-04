import React from 'react';


import "../CSS/SideFilters.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const RatingFilter = () => {

  

  return (
    <>
 
   <div className={`filter_by_rating`} onClick={()=>alert('feauter will be updated')} >
      <div className={`toggle_div`}>
        <h5>Rating</h5>
        <FontAwesomeIcon  icon={faChevronDown} />
      </div>

      <div className={``}>
          
      </div>
   </div>

    </>
  )
}

export default RatingFilter