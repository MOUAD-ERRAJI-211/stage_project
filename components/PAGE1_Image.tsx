import React from "react";
import myImage from './img.jpg';
import "./components.css";


function PAGE1_Image() {
    return (
        <div className="page1_img1_div1">
            <img src={myImage.src} alt="Descriptive Alt Text" className="page1_img1" />
        </div>
    );
}

export default PAGE1_Image;
