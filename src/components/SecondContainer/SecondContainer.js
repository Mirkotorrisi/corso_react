import React from "react";

//una prop particolare è la prop children che non viene passata nel modo tradizionale
// ma viene passata usando i tag di apertura e chiusura come in html
export const SecondContainer = ({ children }) => {
  return (
    <div>
      <h1>Second Container</h1>
      <div className="second-container">{children}</div>
    </div>
  );
};
