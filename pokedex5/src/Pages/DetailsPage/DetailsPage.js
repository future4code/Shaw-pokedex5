import React, {useEffect, useState, useContext} from "react";
import { GlobalContext } from "../../global/GlobalContext";

import {useNavigate, useParams} from "react-router-dom";
import { goBack, goToPokedexPage} from "../../routes/coordinator";

import { CaretDoubleLeft, GameController, ListDashes, TrashSimple } from "phosphor-react";
import pokemonLogo from "../../assets/pokebola.png";
import titulo from "../../assets/logo.png";

import {
    PokeDetailBox, 
    //HeaderDetailPage,
    BotaoBack,
    //BotaoPokedex,
    PokeMain,
    ImgPoke,
    StatsBox,
    TypeBox,
} from "./styled";

import {
    HeaderContainer,
    ImgLogo,
    ImgTitulo,
  } from "../../components/Header/style";

import useRequestData from "../../hooks/useRequest";
import Base_URL from "../../constants/url";
import axios from "axios";
import { CardPokedexStyle } from "../../components/CardPokedex/styled";


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
                setPokeChoiceImg(res.data)
                return(
                    <img src={pokeImg.sprites.versions['generation-v']['black-white'].animated.front_default}/>
                )
            }).catch((error)=>console.log(error.message))
        })       
    };
    console.log(setPokeChoiceImg());

    const setPokeStat = async()=>{
        const pokeChoiceStat = pokeChoiceRequest?.stats;
        const pokeStats = pokeChoiceStat?.map((pokeStat)=>{
           return <li>{pokeStats.stat}</li>
        });         
    };    
    console.log(setPokeStat())
   
    return(
        <PokeDetailBox>
        
        <HeaderContainer>
            {/* <ImgLogo src={pokemonLogo} /> */}
            <ImgTitulo src={titulo} />

            <BotaoBack type="submit" onClick={() => goBack(navigate)}>
            <CaretDoubleLeft size={38} /> VOLTAR
            </BotaoBack>

            <button  onClick={() => goToPokedexPage(navigate)}>
            <GameController size={38}/> POKÉDEX
            </button>
        </HeaderContainer>     

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
                    {setPokeStat}
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