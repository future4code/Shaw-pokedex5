import { goBack, goToPokedexPage} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import React from "react";

const DetailsPage =() => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Detalhes Pokemons</h1>
            <button onClick={()=> goBack(navigate)}>Voltar</button>
            <button onClick={()=> goToPokedexPage(navigate)}>Ir para pokedex</button>
            <div>
                <p>Detalhes</p>
            </div>
        </div>
    )
}

export default DetailsPage