import React from "react";

//css
import   "../CSS/Cover.css";

//Layout
import Menubar from "./Menubar";
import ImgSlider from "./ImgSlider";

const Cover = () => {
  return (
    <>
        <section className="cover">
        <Menubar />
        <ImgSlider />
        </section>

    </>
  );
};

export default Cover;
