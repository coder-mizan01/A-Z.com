import React from "react";
import { Link } from "react-router-dom";

import config from "../config.json";

import Slider from "react-slick";

//css
import "../CSS/Products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//component
import AddToCart from "../Component/AddToCart";

//icons
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

//
import { useSelector } from "react-redux";
import Spinner from "../Component/Spinner";

const Home_Smart_Watches = () => {

  //make custone next arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsArrowRightShort
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  //make custom prev arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsArrowLeftShort
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          speed: 800,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 800,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          speed: 800,
          dots: false,
          infinite: true,
        },
      },
      {
       breakpoint : 670,
       settings: {
        slidesToShow : 2,
        slidesToScroll : 2,
        initialSlide : 1,
        speed: 800,
        dots : false,
        infinit : false,
       }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 800,
          dots: false,
          infinit : false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800,
          dots: false,
          infinit : false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800,
          dots: false,
          infinit:false,
        },
      },
    ],
  };
    

  
   //declare productquantity variable
   let productQuantity;

    
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state)=> state.allproduct);

  //destructure property from object
   const {loading , products , error} = productsObj;



  //filter electronics products
  let smart_watches;
  smart_watches = products.filter((pro) => {
    return pro.category === "smart_watches" ;
  })

  console.log(smart_watches);

  //destructure category from computer items
  let {category} = smart_watches[0] !== undefined && smart_watches[0]

  

  return (
    <>
      <div className="slide-header">
         <h2>{category}</h2>
         <Link  to={`/${category}`} className="button buttontext">See All</Link>
      </div>

      <Slider {...settings} className="">
   
        {loading !== true  ? (
          smart_watches.map((smart_watche,index) => {
            const { title, slug, price, _id } = smart_watche;
   
            return (
              <div key={index} className="product">
                <Link to={`/SingleProduct/${slug}`}>
                  <div className="product-img">
                    <img
                      className="home-pro-img"
                      src={`${config.apiUrl}/api/product/product-photo/${smart_watche._id}`}
                      alt=""
                    />
                  </div>

                  <div className="pro-content">
                    <p className="title">{title.slice(0,18)}..</p>
                    <p className='rating'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></p> 
                  </div>
                </Link>

                <div className="addcart">
                  <p className="price">Tk.{price}</p>
                  <AddToCart
                    product={smart_watches}
                    name={"+add"}
                    quantity={productQuantity}
                  />

                </div>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </Slider>


    </>
  );
};

export default Home_Smart_Watches;
