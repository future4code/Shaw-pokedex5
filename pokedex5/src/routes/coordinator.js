export const goToPokedexPage= (navigate) => {
    navigate("/Inicio/Pokedex")
}

export const goToDetailsPage = (navigate, pokemon) => {
 navigate(`/Inicio/Detalhes-Pokemons/${pokemon}`)
}

export const goBack = (navigate) =>{
    navigate(-1)
  }
