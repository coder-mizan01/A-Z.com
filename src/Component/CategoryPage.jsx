import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

//Api-link
import config from "../config.json"

//css
import CategoryPageCSS from "../CSS/CategoryPage.module.css"
//icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//component
import Pagination from "./Pagination";
import SideFilters from "./SideFilters";


import { useDispatch ,useSelector } from "react-redux";
import { LowestPriceProduct , HighestPriceProduct, ProductFromAtoZ, ProductFromZtoA  ,categoryWiseProductsAction} from "../Redux/FilterProduct";
const CategoryPage = ({ products }) => {
  const copyProducts = [...products];
  let SingleProduct = copyProducts[0];


  const categoryProducts = useSelector((state)=> state.filterproduct)
  const {category_Wise_Products} = categoryProducts;
  


 
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(categoryWiseProductsAction(products))
  },[products])


const [selectedOption , setSelectedOption] = useState("");
 const handlePriceChange = (e,product) => {
  let selectedValue = e.target.value;
  setSelectedOption(selectedValue) 
    if(selectedValue==="highest"){
      dispatch(HighestPriceProduct(product))
    } if(selectedValue === "lowest"){
      dispatch(LowestPriceProduct(product)) 
    } if(selectedValue === "A-Z"){
      dispatch(ProductFromAtoZ(product))
    } if(selectedValue === "Z-A"){
      dispatch(ProductFromZtoA(product))
    }
 }




  return (  
    <>

<div className={CategoryPageCSS.category_page_topbar}>
        <Pagination Products={SingleProduct}  />
        <select name="" id=""  onChange={(e)=>{handlePriceChange(e,category_Wise_Products)}} >
            <option value="">sort by: Feauture</option>
            <option value="A-Z">Product (A-Z)</option>
            <option value="Z-A">Product (Z-A)</option>
            <option value="highest" >Price (highest-lowest)</option>
            <option value="lowest">Price (lowest-highest) </option>
          </select>
      </div>


      <div className={CategoryPageCSS.category_page_container}>

        <SideFilters products={products} /> 
   
       <div className={CategoryPageCSS.category_page_products}>
 
      

          {category_Wise_Products?.map((pro) => {
            const {title, slug, price, _id , subcategory, brand} = pro;

            return (
              <div className={CategoryPageCSS.pro} key={_id}>

                <Link to={`/SingleProduct/${slug}`}>
                  <img
                    className={CategoryPageCSS.category_pro_img}
                    src={`${config.apiUrl}/api/product/product-photo/${pro._id}`}
                    alt=""
                  />
                </Link>

                <div className={CategoryPageCSS.category_pro_content}>
                     <p className="title">{ title.length > 20 ? title.slice(0,28)+'...': title}</p>
                     <p className="star">
                      {" "}
                      <AiFillStar />
                      <AiFillStar /> <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar /> 
                    </p>
                    <p className="price">Tk.{price}</p>
                    
                  </div>

              </div>
            );
          })}
           </div> 
      </div>
    </>
  );
};

export default CategoryPage;
