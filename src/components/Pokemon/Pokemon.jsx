import { usePokemon } from "../../hooks/usePokemon";

export const Pokemon = ({ name, url }) => {
  const { pokemon } = usePokemon({ url });

  return (
    <div className="pokemon">
      <p className="pokemon__name">{name}</p>
      <img
        src={pokemon?.sprites.front_default}
        className="pokemon__img"
        alt={name}
      />
    </div>
  );
};
