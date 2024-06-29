import React from "react";
import heroImage from "../../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Hero Banner" className="hero-image" />
    </div>
  );
};

export default Hero;
