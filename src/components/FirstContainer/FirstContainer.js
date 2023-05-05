import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

// le props sono degli attributi che passiamo dal componente padre/parent al componente figlio/child

export const FirstContainer = ({ form, handleChange, onClick }) => {
  return (
    <div>
      <h1>First Container</h1>
      <div className="form">
        <Input
          name="username"
          value={form["username"]}
          handleChange={handleChange}
        />
        <Input
          name="password"
          value={form["password"]}
          handleChange={handleChange}
        />
        <Button onClick={onClick} />
      </div>
    </div>
  );
};
