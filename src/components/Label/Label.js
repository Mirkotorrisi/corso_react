import React from "react";

// PROPS === PARAMETRI DEL COMPONENTE
export const Label = (props) => {
  const { children, textColor } = props;
  return <div style={{ color: textColor }}>{children}</div>;
};
