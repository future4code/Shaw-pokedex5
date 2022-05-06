import React from "react";
import { goToDetailsPage, goToPokedexPage} from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {CardContainer, CardPokedexStyle, ButtonAdcPokedex, ButtonDetalhes} from "./styled"
import { GameController, ListDashes } from "phosphor-react";

export const CardPokedex = (props) => {
  const navigate = useNavigate();
  const renderPokemon = props.pokemonList?.map((pokemon) => {
    const  onClickPokeDex =  () =>{
      props.setPokemonList(pokemon)
    }
    console.log(pokemon.name)
    
    return (
        <CardPokedexStyle>
        <img src={pokemon.sprites.front_default} />
        <h3>{pokemon.name}</h3>
       
        <div onClick={() => goToPokedexPage(navigate)}>
          <ButtonAdcPokedex onClick={() => onClickPokeDex()}
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