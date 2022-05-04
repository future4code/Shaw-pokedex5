import React, { useState, useEffect } from "react";
import axios from "axios"

export const CardPokedex = (props) =>{
    const [imagePokemon, setImagePokemom] = useState([])
    
    const getImagePokemon = async () =>{
        axios
        .get(`${props.pokemon}`)
        .then((res)=>{
            setImagePokemom(res.data)
        })
        .catch((err)=>{
            alert("Erro! Sem imagens.", err)
        })
    }

    useEffect(()=>{
        getImagePokemon()
    }, [])

    // const renderImagePokemons= imagePokemon.map((pokemon)=>{
    //     return(
    //         <div>
    //             <p>{pokemon.name}</p>
    //             <img src={pokemon.official}/>
    //         </div>
    //     )
    // })
    
    console.log(imagePokemon);

    return(
        <div>
            {/* {renderImagePokemons} */}
        </div>
    )
}