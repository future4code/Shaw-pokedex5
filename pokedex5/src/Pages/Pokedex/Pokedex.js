import { goToDetailsPage, goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  HeaderContainer,
  ImgLogo,
  ImgTitulo,
} from "../../components/Header/style";
import { CaretDoubleLeft, ListDashes, TrashSimple } from "phosphor-react";
import pokemonLogo from "../../assets/pokebola.png";
import titulo from "../../assets/logo.png";
import { ButtonDetalhes, ButtonRemove, ContainerPokedex } from "./styled";

const Pokedex = () => {
  const navigate = useNavigate();

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
        <p>Imagem</p>
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
