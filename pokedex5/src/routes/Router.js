import Home from "../Pages/Home/Home"
import Pokedex from "../Pages/Pokedex/Pokedex"
import DetailsPage from "../Pages/DetailsPage/DetailsPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Router = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/Inicio/Pokedex" element={<Pokedex/>}/>
            <Route path="/Inicio/Detalhes-Pokemons" element={<DetailsPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router