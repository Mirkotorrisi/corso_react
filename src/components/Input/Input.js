import React from "react";

export const Input = ({ input, name, handleChange }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder={name}
      name={name}
      value={input}
      onChange={(e) =>
        handleChange({
          name,
          value: e.target.value,
        })
      }
    />
  );
};
