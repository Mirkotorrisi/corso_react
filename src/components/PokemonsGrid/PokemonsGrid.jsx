import React from "react";
import { usePokemonsList } from "../../hooks/usePokemonsList";
import "./index.scss";
import { Pokemon } from "../Pokemon/Pokemon";
// le props sono degli attributi che passiamo dal componente padre/parent al componente figlio/child

export const PokemonsGrid = () => {
  const { pokemons } = usePokemonsList();

  return (
    <div className="grid">
      {pokemons?.map((p, i) => (
        <Pokemon name={p.name} url={p.url} />
      ))}
    </div>
  );
};
