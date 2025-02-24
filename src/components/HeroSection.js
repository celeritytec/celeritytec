import React from "react";
import "../styles/style.css"; // Ensure your CSS file is included

const Hero = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="Hero Background" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
