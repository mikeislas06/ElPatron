import React from "react";

import decorator from "../../../assets/img/decoradores/decorator.png";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="Location__Hero">
      <div className="Location__Hero__content">
        <img src={decorator} alt="" />
        <p>Visite nuestra</p>
        <h1>Dirección</h1>
      </div>
    </div>
  );
};

export default HeroSection;
