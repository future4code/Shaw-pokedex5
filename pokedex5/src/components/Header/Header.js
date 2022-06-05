import { goToPokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, ImgLogo, ImgTitulo } from "./style";
import { GameController } from "phosphor-react"; 
import pokemonLogo from "../../assets/pokebola.png"
import titulo from "../../assets/logo.png"

export const Header = () => {
    const navigate = useNavigate();
  return (
    <HeaderContainer>
      <ImgLogo src={pokemonLogo}/>
      <ImgTitulo src={titulo}/>
      <button 
      // type="submit"
      onClick={() => goToPokedexPage(navigate)}>
      <GameController size={38}/> POKÉDEX
      </button>
    </HeaderContainer>
  );
};
