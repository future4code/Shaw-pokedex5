import styled from "styled-components";

export const PokeDetailBox = styled.div`
`;

export const PokeMain = styled.div`
background-color: white;
display: flex;
flex-direction: row;
height: 40vh;
justify-content:space-evenly;
margin: 15px 15 vw;
align-items:center;
display:grid;
grid-template-columns: auto auto auto auto;
row-gap:1rem;
column-gap: 1rem;
`;

export const HeaderDetailPage = styled.div`
background-color: yellow;
height:50px;
`;

export const BotaoBack = styled.div`
padding: 1rem;
width: 15rem;
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

`;

export const BotaoPokedex = styled.div`
display: flex;
flex-direction: row;
`;

export const ImgPoke = styled.div`
display: flex;
flex-direction: column;
padding:100px;
background-color:#045FB4;
border-radius: 2rem;
align-self: center;
transition: 0.5s;
:hover{
    background-color:#0080FF;
}
`;

export const StatsBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
padding:50px;
border-radius: 2rem;
`;

export const TypeBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
padding:50px;
border-radius: 2rem;  
`;

