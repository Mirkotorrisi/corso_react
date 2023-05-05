import { useState } from "react";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState(undefined);

  const onClick = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const parsed = await res.json();
    // fetch("https://pokeapi.co/api/v2/pokemon/charmander").then((data) => {
    //   data.json().then((res) => {
    //     console.log(res);
    //   });
    // });

    setPokemon(parsed);
  };

  return { onClick, pokemon };
};
