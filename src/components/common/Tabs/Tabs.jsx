import React from "react";

import "./Tabs.scss";

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="tabs" onChange={(e) => console.log(e.target.value)}>
      <input
        type="radio"
        id="radio-1"
        name="tabs"
        checked={selected === "alimentos"}
        onChange={(e) => setSelected(e.target.value)}
        value="alimentos"
      />
      <label className="tab" htmlFor="radio-1">
        Alimentos
      </label>
      <input
        type="radio"
        id="radio-2"
        name="tabs"
        value="bebidas"
        checked={selected === "bebidas"}
        onChange={(e) => setSelected(e.target.value)}
      />
      <label className="tab" htmlFor="radio-2">
        Bebidas
      </label>
      <span className="glider"></span>
    </div>
  );
};

export default Tabs;
