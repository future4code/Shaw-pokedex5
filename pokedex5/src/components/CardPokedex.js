import React from "react";
import { goToDetailsPage} from "../routes/coordinator";
import { useNavigate } from "react-router-dom";


export const CardPokedex = (props) => {

  const navigate = useNavigate();
  const renderPokemon = props.pokemonList?.map((pokemon) => {    
 
    
    console.log(pokemon.name)
    return (
      <div>
        {pokemon.name}
        <img src={pokemon.sprites.front_default} />
        <div>
        {/* <div onClick={() => goToPokedexPage(navigate)}> */}
          <button onClick={() => props.setPokedex(pokemon)}
          // disabled={pokedex.legth <= 1}
          >
            Adicionar a Pokedex
          </button>
        </div>
        <div>
          <button onClick={() => goToDetailsPage(navigate, pokemon.name)}>
            Ver detalhes
          </button>
        </div>
      </div>
    );
  });
  return <div>{renderPokemon}</div>;
};