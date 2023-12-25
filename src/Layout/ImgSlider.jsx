import React from "react";

//packages


//css
import "../CSS/Imgslider.css";

//icons
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"

const Imgslidersr = () => {
  return (
    <>
  

<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">

    <div className="carousel-item active">
    <a href="/#/electronics/computer-accessories">
      <img src="electronics.jpg" className="img-fluid" alt="..." />
      </a>
    </div>

    <div className="carousel-item">
    <a href="/#/fashion/cloths">
      <img src="cover1.png " className="img-fluid" alt="..." />
      </a>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <IoIosArrowBack className="carouselprev-icon" aria-hidden="true" />
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <IoIosArrowForward className="carouselnext-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



    </>
  );
};

export default Imgslidersr;
