import { useCallback, useEffect, useState } from "react";
import { api } from "../utils/api";

export const usePokemon = ({ url }) => {
  const [pokemon, setPokemon] = useState(undefined);

  const getPokemon = useCallback(async () => {
    const res = await api({
      url,
      method: "GET",
    });

    setPokemon(res);
  }, [url]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return { pokemon };
};
