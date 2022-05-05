// import React, {useEffect, useState} from "react";

// import {useNavigate} from "react-router-dom";
// import { goBack, goToPokedexPage} from "../../routes/coordinator";

// import axios from "axios";
// import {
//     PokeDetailBox, 
//     HeaderDetailPage,
//     BotaoBack,
//     BotaoPokedex,
//     PokeMain,
//     StatsBox,
//     TypeBox,
// } from "./styled";

// const urlBase="https://pokeapi.co/api/v2/pokemon/"



// const DetailsPage = () => {

//     const navigate = useNavigate()

//     const [pokeImg, setPokeImg]=useState({})
//     const [pokeStat, setPokeStat]=useState([])
//     const [pokeType, setPokeType]=useState([])
//     //id vindo da requisição na home (props/context)
//     //const [id, setId]=useState("")



//     useEffect(()=>{
        
//         /*axios.get(`${urlBase}stats/${id}`)
//         .then((response)=>{
//             setId(response.data.id);   
//         }).catch((erro)=>{
//             alert(erro.data.response);
//         })*/

//     },[])


//     const getPokemonsImgs=()=>{
//         axios.get(`${urlBase}stats/${id}`)
//         .then((response)=>{
//             setPokeImg(response.data.sprites.versions['generation-v']['black-white'].animated.front_default)
//         }).catch((erro)=>{
//             alert(erro.data.response)
//         })

//     }
    
//     const showPokemon = pokeImg && pokeImg.map((img)=>{
//         return(
//             <ImgPoke>
//                 <img src={getPokemonsImgs}/>
//             </ImgPoke>      

//         )

//     })

//     const getPokemonsStats=()=>{
//         axios.get(`${urlBase}stats/${id}`)
//         .then((response)=>{
//             setPokeStat(response.data.stat)
//         }).catch((erro)=>{
//             alert(erro.data.response)
//         })

//     }




//     return(
//         <PokeDetailBox>

//             <HeaderDetailPage>
//                 <BotaoBack onClick={()=> goBack(navigate)}>Voltar</BotaoBack>
//                 <BotaoPokedex onClick={()=> goToPokedexPage(navigate)}>Ir para Pokedex</BotaoPokedex>
//             </HeaderDetailPage>

           
//             <PokeMain>
//                 <h1>Detalhes do Pokemon</h1>

//                 {showPokemon}           

                
//                 <StatsBox>
//                     <h3>Poderes</h3>
//                     <ul>
//                         <li key={stat.id}>
//                             <p>{stat.hp}</p>
//                             <p>{stat.attack}</p>
//                             <p>{stat.specialAttack}</p>
//                             <p>{stat.defense}</p>
//                             <p>{stat.specialDefense}</p>
//                             <p>{stat.speed}</p>                        
//                         </li>
//                     </ul>
//                 </StatsBox>

                
//                 <TypeBox>
//                 <h3>Principais ataques</h3>

//                 </TypeBox>

//             </PokeMain>            
            
//         </PokeDetailBox>
//     )
// }

// export default DetailsPage;