import React, {useEffect, useState, useContext} from "react";
import { GlobalContext } from "../../global/GlobalContext";

import {useNavigate, useParams} from "react-router-dom";
import { goBack, goToPokedexPage} from "../../routes/coordinator";



import axios from "axios";
import {
    PokeDetailBox, 
    HeaderDetailPage,
    //BotaoBack,
    //BotaoPokedex,
    PokeMain,
    ImgPoke,
    StatsBox,
    TypeBox,
} from "./styled";

//import useRequestData from "../../hooks/useRequest";
import Base_URL from "../../constants/url";


const DetailsPage = (props) => {

    const {pokemon, pokemonDetalhes, setPokemonDetalhes} = useContext(GlobalContext)

    //imgPoke = pokemonDetalhes.sprites.versions['generation-v']['black-white'].animated.front_default;
    

    const navigate = useNavigate()
    const params = useParams()
    console.log(params.pokemon)

    //get.axios urlbase/params.pokemon
    //const pokeRequest = useRequestData(`${Base_URL}${params.pokemon}`).map;
    console.log(`${Base_URL}${params.pokemon}`)

  

    return(
        <PokeDetailBox>

            <HeaderDetailPage>
                <button onClick={()=> goBack(navigate)}>Voltar</button>
                <button onClick={()=> goToPokedexPage(navigate)}>Ir para Pokedex</button>
            </HeaderDetailPage>

           
            <PokeMain>
                <h1>Detalhes do Pokemon</h1>

                <ImgPoke>
                {/* <img src={pokeRequest.pokemonDetalhes.sprites.versions['generation-v']['black-white'].animated.front_default}/> */}
            	</ImgPoke>                      
                  
                
                <StatsBox>
                    <h3>Poderes</h3>
                    <ul></ul>
                </StatsBox>

                <TypeBox>
                    <h3>Principais ataques</h3>
                    <ul></ul>
                </TypeBox>

            </PokeMain>            
            
        </PokeDetailBox>
    )
}

export default DetailsPage;