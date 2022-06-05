import styled from "styled-components";

export const CardContainer = styled.div`
display:grid;
grid-template-columns: auto auto auto auto;
row-gap:1rem;
column-gap: 1rem;

`
export const CardPokedexStyle = styled.div`
background-color:#045FB4;
border-radius: 2rem;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
transition: 0.5s;
img{
    width: 8.5rem;
    height: 8.5rem;
}
:hover{
    background-color:#0080FF;
}
`
export const ButtonAdcPokedex = styled.button`
border-radius: 2rem;
border: solid 2px black;
background-color: #FACC2E;
border-bottom: none;
border-top: none;
border-left: none;
border-right: none;
padding: 4px;
width: 8.5rem;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 600;
transition: all;
cursor: pointer;
:hover{
background-color: #2E9AFE;
}
`
export const ButtonDetalhes = styled.button`
border-radius: 2rem;
border: solid 2px black;
border-bottom: none;
border-top: none;
border-left: none;
border-right: none;
background-color: red;
margin: 0.5rem;
width: 7rem;
height: 2rem;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 600;
transition: 0.2s;
cursor: pointer;
:hover{
    background-color: #2E9AFE;
}
`