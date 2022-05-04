import { GlobalContext } from "./GlobalContext";
import { useState } from "react";
import useRequestData from "../hooks/useRequest";
import Base_Url from "../constants/url"

export const GlobalState = (props) =>{
    const [pokemon, setPokemon] = useState([])
    const pokemonUse = useRequestData(`${Base_Url}`)


    return(
        <GlobalContext.Provider value={{pokemon,setPokemon,pokemonUse}}>
            
            {props.children}
            
        </GlobalContext.Provider>
    )

}
