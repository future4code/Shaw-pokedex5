import { GlobalContext } from "./GlobalContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequest";
import Base_Url from "../constants/url"
import axios from "axios";

export const GlobalState = (props) =>{
    const [pokemon, setPokemon] = useState([])
    const [pokemonDetalhes, setPokemonDetalhes] = useState({})
    const pokemonUse = useRequestData(`${Base_Url}`)  

    return(
        <GlobalContext.Provider value={{pokemon,setPokemon, pokemonUse, setPokemonDetalhes}}>
            
            {props.children}
            
        </GlobalContext.Provider>
    )

}
