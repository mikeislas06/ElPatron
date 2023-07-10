import React, { useState } from "react";

import Tabs from "../common/Tabs/Tabs";
import alimentos from "../../assets/img/menu/carnes.jpg";
import bebidas1 from "../../assets/img/menu/bebidas1.jpg";
import bebidas2 from "../../assets/img/menu/bebidas2.jpg";
import bebidas3 from "../../assets/img/menu/bebidas3.jpg";
import bebidas4 from "../../assets/img/menu/bebidas4.jpg";
import bebidas5 from "../../assets/img/menu/bebidas5.jpg";
import bebidas6 from "../../assets/img/menu/bebidas6.jpg";
import "./MenuPage.scss";

const MenuPage = () => {
  const [selected, setSelected] = useState("alimentos");
  return (
    <div className="Menu">
      <Tabs selected={selected} setSelected={setSelected} />

      {selected === "alimentos" ? (
        <div className="menuAlimentos">
          <img src={alimentos} alt="Menú de alimentos" />
        </div>
      ) : (
        <div className="menuBebidas">
          <img src={bebidas1} alt="Menú de bebidas" />
          <img src={bebidas2} alt="Menú de bebidas" />
          <img src={bebidas3} alt="Menú de bebidas" />
          <img src={bebidas4} alt="Menú de bebidas" />
          <img src={bebidas5} alt="Menú de bebidas" />
          <img src={bebidas6} alt="Menú de bebidas" />
        </div>
      )}
    </div>
  );
};

export default MenuPage;
