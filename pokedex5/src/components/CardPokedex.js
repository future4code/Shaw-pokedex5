import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../global/GlobalContext";
import axios from "axios";
import useRequestData from "../hooks/useRequest";
import Base_URL from "../constants/url";

export const CardPokedex = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const vaiPokemon = useRequestData(`${Base_URL}`);
  const listaPokemon = [];
  const { pokemon, setPokemon, pokemonUse, setPokemonDetalhes } =
    useContext(GlobalContext);

  const getPokemon = async () => {
    const pokemonInfo = vaiPokemon?.results;
    const pokeNames = pokemonInfo?.map((pokeName) => {
      return pokeName.name;
    });

    const pokemons = pokeNames?.map(async (pokeName) => {
      const newUrl = `${Base_URL}${pokeName}`;
        let response;
        try {
          response = await axios.get(newUrl);
        } catch (err) {
          console.log(err);
        } finally {
          return response.data;
        }
    });
    console.log(pokemons);
    const pokePromisses = await Promise.all(pokemons);
    setPokemonList(pokePromisses);
  };

  useEffect(() => {
    getPokemon();
  }, [vaiPokemon]);

  const renderPokemon = pokemonList?.map((pokemon) => {
    return (
      <div>
        {pokemon.name}
        <img src={pokemon.sprites.front_default} />
        <button onClick={() => setPokemonDetalhes(pokemon)}>
          Ver detalhes
        </button>
      </div>
    );
  });
  return <div>{renderPokemon}</div>;
};
