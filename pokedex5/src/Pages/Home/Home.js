import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CardPokedex } from "../../components/CardPokedex/CardPokedex";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Base_URL from "../../constants/url";
import useRequestData from "../../hooks/useRequest";
import { GlobalContext } from "../../global/GlobalContext";
import {MainContainer} from "./styled"

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const pokeRequest = useRequestData(`${Base_URL}`);
  const listaPokemon = [];
  const navigate = useNavigate();
  const { setPokemonDetalhes, setPokedex, pokedex } =
    useContext(GlobalContext);

  const getPokemon = async () => {
    const pokemonInfo = pokeRequest?.results;
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
  }, [pokeRequest]);

  return (
    <div>
      <Header/>
      <MainContainer>
       <CardPokedex pokemonList={pokemonList}
       setPokemonList={setPokemonList}
       setPokemonDetalhes={setPokemonDetalhes}
       setPokedex = {setPokedex}/>
      </MainContainer>
    </div>
  );
};
export default Home;
