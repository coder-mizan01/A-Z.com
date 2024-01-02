import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//css
import styles from  "../CSS/Menubar.module.css";

//component
import { categories } from "../Component/Categories";





import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faMobileScreen,
  faHeadphones,
  faWifi,
  faClock,
  faLaptop,
  faVolumeHigh,
  faBook,
  faHouse,
  faPlugCircleBolt,
  faCircle,
  faGift
} from "@fortawesome/free-solid-svg-icons";


const Menubar = ({ onScrollMenuBar, onClickMenuBar }) => {
 
  const iconArr = [
    faLaptop,
    faMobileScreen,
    faHeadphones,
    faClock,
    faPlugCircleBolt,
    faVolumeHigh,
    faWifi,
    faLightbulb,
    faHouse,
    faBook,
    faCircle,
    faGift,]

  const [isHovered, setIsHovered] = useState({
    fashion: false,
    health: false,
    electronics: false,
    kids: false,
    groceries: false,
    mens: false,
    baby: false,
    electronicDevice: false,
    tv: false,
    home: false,
    sports: false,
    gifts: false,
  });

  const {
    fashion,
    health,
    electronics,
    kids,
    groceries,
    mens,
    baby,
    electronicDevice,
    home,
    sports,
    gifts,
  } = isHovered;
  const handleMouseOver = (item) => {
    setIsHovered((prev) => ({
      ...prev,
      [item]: true,
    }));
  };

  const handleMouseLeave = (item) => {
    setIsHovered((prev) => ({
      ...prev,
      [item]: false,
    }));
  };


  return (
    <>
      <div className={onScrollMenuBar ? styles.scroll : styles.menubar} onClick={onClickMenuBar} >
        <div className={styles.side_nav}>
          <ul>
            {Object.keys(categories).map((category,i)=>{
             
             return  <li key={i}>
              <NavLink to={`/${category}`}>
                <FontAwesomeIcon icon={iconArr[i]}/>{category}{" "}
              </NavLink>
              <ul className={styles.dropdown}>
              {categories[category].map((subcategory) => (
                        
              <li key={subcategory}>
              <NavLink to={`/${category}/${subcategory}`}>
                {subcategory}
              </NavLink>
            </li>
          ))}
              </ul>
            </li>
            })}
          </ul>
        </div>
      </div>

    </>
  );
};

export default Menubar;
