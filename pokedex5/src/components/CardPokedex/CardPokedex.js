import React, { useContext, useState } from "react";
import { goToDetailsPage, goToPokedexPage} from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {CardContainer, CardPokedexStyle, ButtonAdcPokedex, ButtonDetalhes} from "./styled"
import { GameController, ListDashes } from "phosphor-react";
import { GlobalContext } from "../../global/GlobalContext";

export const CardPokedex = (props) => {
  const navigate = useNavigate();
  const { setPokemonDetalhes, setPokedex, pokedex,pokemonPokedex, setPokemonPokedex } =
  useContext(GlobalContext);
  const renderPokemon = props.pokemonList?.map((pokemon) => {
    
 
  // onClick={() => goToPokedexPage(navigate)}
// console.log("aoba",pokedex)

const addPokeDex = (pokemon) =>{
  const newPoke = [...pokemon,pokemon]
  console.log("new",newPoke)
  setPokedex(newPoke)
  alert(`pokemon, foi adicionado`)
}

    return (
        <CardPokedexStyle>
        <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} />
        <h3>{pokemon.name}</h3>
       
        <div  >
          <ButtonAdcPokedex onClick={()=> addPokeDex(pokemon.name)}
          // disabled={pokedex.legth <= 1}
          >
            <GameController size={25}/>
            Adicione a Pokédex
          </ButtonAdcPokedex>
        </div>
        <div>
          <ButtonDetalhes onClick={() => goToDetailsPage(navigate, pokemon.name)}>
            <ListDashes/> Ver detalhes
          </ButtonDetalhes>
        </div>
      </CardPokedexStyle>
    );
  });
  return <CardContainer>{renderPokemon}</CardContainer>;
};