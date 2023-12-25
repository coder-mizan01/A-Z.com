import React from "react";

//css
import   "../CSS/Cover.css";

//Layout
import Menubar from "./Menubar";
import ImgSlider from "./ImgSlider";

const Cover = () => {
  return (
    <>
      <section id="cover">
        <Menubar />
        
        <ImgSlider />
      </section>
    </>
  );
};

export default Cover;
