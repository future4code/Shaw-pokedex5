import React, {useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";
import { goBack, goToPokedexPage} from "../../routes/coordinator";

import axios from "axios";
import styled from "styled-components";


const PokeMain = styled.div`
background-color: white;
display: flex;
flex-direction: row;
height: 90vh;
justify-content:space-around;
margin: 15px 15 vw;
align-items:center;
`
const HeaderDetailPage = styled.div`
background-color: yellow;
`
const BotaoBack = styled.div`
display: absolute;
left: 10%;
`
const BotaoPokedex = styled.div`
display: absolute;
right: 10%;
`
const ImgPoke = styled.div`
display: flex;
flex-direction: column;
border: black 1px;
padding:10px;
`
const StatsBox = styled.div`
display: flex;
flex-direction: column;
border: black 1px;
padding:10px;
`
const TypeBox = styled.div`
display: flex;
flex-direction: column;
border: black 1px;
padding:10px;
`

const urlBase="https://pokeapi.co/api/v2/pokemon/"



const DetailsPage = () => {

    const navigate = useNavigate()

    const [pokeImg, setPokeImg]=useState({})
    const [pokeStat, setPokeStat]=useState([])
    const [pokeType, setPokeType]=useState([])
    //id vindo da requisição na home?
    const [id, setId]=useState("")



    useEffect(()=>{
        
        axios.get(`${urlBase}stats/${id}`)
        .then((response)=>{
            setId(response.data.id);   
        }).catch((erro)=>{
            alert(erro.data.response);
        }) 

    },[])


    const getPokemonsImgs=()=>{
        axios.get(`${urlBase}stats/${id}`)
        .then((response)=>{
            setPokeImg(response.data.sprites.versions['generation-v']['black-white'].animated.front_default)
        }).catch((erro)=>{
            alert(erro.data.response)
        })

    }
    
    const showPokemon = pokeImg.map((img)=>{
        return(
            <ImgPoke>
                <img src={getPokemonsImgs}/>
            </ImgPoke>      

        )

    })

    const getPokemonsStats=()=>{
        axios.get(`${urlBase}stats/${id}`)
        .then((response)=>{
            setPokeStat(response.data.stat)
        }).catch((erro)=>{
            alert(erro.data.response)
        })

    }




    return(
        <PokeDetailBox>

            <HeaderDetailPage>
                <BotaoBack onClick={()=> goBack(navigate)}>Voltar</BotaoBack>
                <BotaoPokedex onClick={()=> goToPokedexPage(navigate)}>Ir para Pokedex</BotaoPokedex>
            </HeaderDetailPage>

           
            <PokeMain>
                <h1>Detalhes do Pokemon</h1>

                {showPokemon}           

                
                <StatsBox>
                    <h3>Poderes</h3>
                    <ul>
                        <li key={stat.id}>
                            <p>{stat.hp}</p>
                            <p>{stat.attack}</p>
                            <p>{stat.specialAttack}</p>
                            <p>{stat.defense}</p>
                            <p>{stat.specialDefense}</p>
                            <p>{stat.speed}</p>                        
                        </li>
                    </ul>
                </StatsBox>

                
                <TypeBox>
                <h3>Principais ataques</h3>

                </TypeBox>

            </PokeMain>            
            
        </PokeDetailBox>
    )
}

export default DetailsPage;