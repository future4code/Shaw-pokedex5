import { goToDetailsPage, goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import {
  HeaderContainer,
  ImgLogo,
  ImgTitulo,
} from "../../components/Header/style";
import { CaretDoubleLeft, ListDashes, TrashSimple } from "phosphor-react";
import pokemonLogo from "../../assets/pokebola.png";
import titulo from "../../assets/logo.png";
import { ButtonDetalhes, ButtonRemove, ContainerPokedex } from "./styled";
import { CardPokedex } from "../../components/CardPokedex/CardPokedex";
import { GlobalContext } from "../../global/GlobalContext";

const Pokedex = (props) => {
  const navigate = useNavigate();
  const { setPokemonDetalhes, setPokedex, pokedex,pokemonPokedex, setPokemonPokedex } =
  useContext(GlobalContext);
 
  
 
  console.log("vem",pokedex)
  
  return (
    <div>
      <HeaderContainer>
        <ImgLogo src={pokemonLogo} />
        <ImgTitulo src={titulo} />
        <button type="submit" onClick={() => goBack(navigate)}>
          <CaretDoubleLeft size={38} /> VOLTAR
        </button>
      </HeaderContainer>
      <ContainerPokedex>
        <h1>Pokédex</h1>
     <p>{pokedex}</p>
     {/* <img src={pokedex.sprites.versions['generation-v']['black-white'].animated.front_default}/> */}
        <ButtonDetalhes onClick={() => goToDetailsPage(navigate)}>
          <ListDashes size={20} />
          Ver detalhes
        </ButtonDetalhes>
        <ButtonRemove>
          {" "}
          <TrashSimple size={25} />
          Remover
        </ButtonRemove>
      </ContainerPokedex>
    </div>
  );
};

export default Pokedex;
