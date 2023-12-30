
 import { createSlice } from "@reduxjs/toolkit";

 const FilterProductSlice = createSlice({
    name : "filterproduct",
    initialState : {
       category_Wise_Products :[],
    },

    reducers : {
      categoryWiseProductsAction:(state,action)=>{
        state.category_Wise_Products = [...action.payload];
      },
        LowestPriceProduct : (state,action) => {
           let products = action.payload; 
           state.category_Wise_Products = [...products].sort((a,b)=> a.price - b.price)
        },

        HighestPriceProduct : (state,action) =>{
          let products = action.payload;
          state.category_Wise_Products = [...products].sort((a,b)=> b.price - a.price)
        },

        ProductFromAtoZ : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].sort((a,b) => a.title.localeCompare(b.title))
        },

        ProductFromZtoA : (state,action) => {   
         let products = action.payload;
         state.category_Wise_Products  = [...products].sort((a,b)=> b.title.localeCompare(a.title));
        },
        HavitBrand : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].filter((product)=>product.brand === "Havit")
        },
        HocoBrand : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].filter((product)=>product.brand === "Hoco")
        },
        FantechBrand : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].filter((product)=>product.brand === "Fantech")
        },
    }
 })

 export const {categoryWiseProductsAction,LowestPriceProduct , HighestPriceProduct , ProductFromAtoZ, ProductFromZtoA , polobrand,HavitBrand,HocoBrand,FantechBrand} = FilterProductSlice.actions;
 export default FilterProductSlice.reducer;