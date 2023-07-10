import React from "react";

import DecoratorTriangle from "../../common/DecoratorTriangle/DecoratorTriangle";

import caipirinha from "../../../assets/img/caipirinha.png";
import bebida from "../../../assets/img/decoradores/bebidaSVG.png";
import "./DrinksSection.scss";

const DrinksSection = () => {
  return (
    <div className="Drinks">
      <DecoratorTriangle direction="down" />
      <div className="Drinks__hero">
        <div className="Drinks__hero__content">
          <h4>Disfruta de nuestras bebidas del bar</h4>
          <p>Elige entre nuestras más de 200 bebidas</p>
        </div>
      </div>
      <div className="Drinks__info__background">
        <div className="Drinks__info__bg-img"></div>
        <div className="Drinks__info__container">
          <img
            src={caipirinha}
            alt="Bebida caipirinha"
            className="Drinks__info__content__image"
          />
          <div className="Drinks__info__content">
            <img src={bebida} alt="Ícono de bebida" />
            <p>
              Todas nuestras bebidas del bar son preparadas al momento de manera
              artesanal y con el máximo esmero.
            </p>
            <p>
              Desde una <span id="naranjada">naranjada</span> hasta una{" "}
              <span id="caipirinha">caipirinha</span>, disfruta de nuestra
              extensa selección de bebidas y deja que nuestro barman te deleite
              de una deliciosa manera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinksSection;
