import React from "react";
import "./index.css";

export const Button = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      Log In
    </button>
  );
};

//REACT HA UNA STRUTTURA AD ALBERO ROVESCIATO // PIRAMIDE

//OGNI COMPONENTE HA IL SUO CICLO DI VITA

// MOUNTING -> NASCITA -> RENDERIZZAZIONE

// RI-RENDERIZZARE
