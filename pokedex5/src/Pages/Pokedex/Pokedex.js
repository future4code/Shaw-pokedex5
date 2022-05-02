import { goToDetailsPage, goBack } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import React from "react";

const Pokedex =() => {
    const navigate = useNavigate()
    
    return(
        <div>
            <h1>Pokédex</h1>
            <button onClick={()=> goBack(navigate)}>Voltar</button>
            <p>Imagem</p>
            <button>Remover da Pokédex</button>
            <button onClick={() => goToDetailsPage(navigate)}>Ver detalhes</button>
        </div>
    )
}

export default Pokedex