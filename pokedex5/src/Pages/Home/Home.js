import { goToDetailsPage, goToPokedexPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { CardPokedex } from "../../components/CardPokedex";
import axios from "axios"

const Home =() => {
    const navigate = useNavigate()
    const [listPokemon, setListPokemon] = useState([])

    const getPokemons = async () =>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon`)
        .then((res)=>{
        setListPokemon(res.data.results.url)
        })
        .catch((err)=> {
            alert("Erro! Sem pokemons.", err)
        })
    }

    useEffect(()=>{
        getPokemons()
    }, [])

    // const renderPokemons = listPokemon ? (
    //     listPokemon.map((pokemon)=>{
    //     return(
    //         <CardPokedex pokemon={pokemon}/>
    //     )
    // })
    // ) : ( <p> Erro! </p>) 

    console.log(listPokemon);

    return(
        <div>
            <h1>Lista de Pokemons</h1>
            <button onClick={()=> goToPokedexPage(navigate)}>Ir para Pokedex</button>
            <div>
                <CardPokedex/>
                {/* {renderPokemons} */}
                <p>Imagem</p>
                <button >Adicionar a Pokédex</button>
                <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
            </div>
        </div>
    )
}

export default Home