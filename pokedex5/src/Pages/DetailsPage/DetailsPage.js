import React, {useEffect, useState, useContext} from "react";
import { GlobalContext } from "../../global/GlobalContext";

import {useNavigate, useParams} from "react-router-dom";
import { goBack, goToPokedexPage} from "../../routes/coordinator";

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

import useRequestData from "../../hooks/useRequest";
import Base_URL from "../../constants/url";
import axios from "axios";


const DetailsPage = (props) => {

    const {pokemon, pokemonDetalhes, setPokemonDetalhes} = useContext(GlobalContext)
    const navigate = useNavigate()
    const params = useParams()
    //const certificaParams = params && params.pokemon
    const pokeChoiceRequest = useRequestData(`${Base_URL}${params.pokemon}`);    
    //console.log(`${Base_URL}${params.pokemon}`)
    
    const setPokeChoiceName = params.pokemon
    //console.log(setPokeChoiceName)
    
    const setPokeChoiceImg = async()=>{
        pokeChoiceRequest?.map((pokeImg)=>{
           axios.get(pokeImg)
            .then((res)=>{
                setPokeChoiceImg(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
            }).catch((error)=>console.log(error.message))
        })       
    };
    console.log(setPokeChoiceImg());

    const setPokeStat = async()=>{
        const pokeChoiceStat = pokeChoiceRequest?.stats;
        const pokeStats = pokeChoiceStat?.map((pokeStat)=>{
           return pokeStats.stat;
        });         
    };    
    console.log(setPokeStat())
   
    return(
        <PokeDetailBox>
        <HeaderDetailPage>
            <button onClick={()=> goBack(navigate)}>Voltar</button>
            <button onClick={()=> goToPokedexPage(navigate)}>Ir para Pokedex</button>
        </HeaderDetailPage>

        <div>
            <h1>Detalhes de</h1>
            <h2>{setPokeChoiceName}</h2>
        </div>
       
        <PokeMain>         

            <ImgPoke>
            {setPokeChoiceImg}  
            </ImgPoke>                 
            
            <StatsBox>
                <h3>Poderes</h3>
                <ul>
                    <li>{setPokeStat}</li>
                </ul>
            </StatsBox>

            <TypeBox>
                <h3>Principais ataques</h3>
                <ul></ul>
            </TypeBox>

        </PokeMain>            
        
    </PokeDetailBox>
    )

    //return <div>{setPokeChoice}</div>
    
}
export default DetailsPage;