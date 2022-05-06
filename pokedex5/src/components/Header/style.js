import styled from "styled-components"

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: solid 4px yellow;
border-top: none;
border-left: none;
border-right: none;
padding-bottom: 0.4rem;
margin-bottom: 2rem;
button{
padding: 2rem;
background-color: red;
border-radius: 3rem;
border:solid 5px black;
display: flex;
justify-content: center;
align-items: center;
width: 2rem;
height: 2rem;
transition:0.4s;
font-size: 14px;
font-weight: bold;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
cursor:pointer;
:hover {
    font-weight: 700;
    width: 10rem;
 }
}
`
export const ImgLogo = styled.img`
    width: 5rem;
    height: 5rem;

`
export const ImgTitulo = styled.img`
    width: 15rem;
    height: 5rem;
    padding-right: 2.5em;
`
