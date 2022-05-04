import { goToDetailsPage, goToPokedexPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import  React  from "react";



const Home =() => {
    const navigate = useNavigate()
  
   
    return(
        <div>
            <h1>Lista de Pokemons</h1>
            
            <button onClick={()=> goToPokedexPage(navigate)}>Ir para Pokedex</button>
            <div>
                <p>Imagem</p>
                <button >Adicionar a Pokédex</button>
                <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
            </div>
        </div>
    )
}

export default Home