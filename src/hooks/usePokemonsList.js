import { useCallback, useEffect, useState } from "react";
import { api } from "../utils/api";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

export const usePokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = useCallback(async () => {
    const res = await api({
      url: URL,
      method: "GET",
    });

    setPokemons(res.results);
  }, []);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return {
    pokemons,
  };
};
