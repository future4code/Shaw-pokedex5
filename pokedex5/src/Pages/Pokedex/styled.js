import styled from "styled-components";

export const ContainerPokedex= styled.div`
background-color:#045FB4;
border-radius: 2rem;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
transition: 0.5s;
:hover{
    background-color:#0080FF;
}
`
export const ButtonRemove = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2rem;
border: solid 2px black;
background-color: #FACC2E;
border-bottom: none;
border-top: none;
border-left: none;
border-right: none;
margin-bottom: 1rem;
padding: 4px;
width: 7rem;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 600;
transition: all;
cursor: pointer;
:hover{
background-color: #2E9AFE;
}
`

export const ButtonDetalhes = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2rem;
border: solid 2px black;
border-bottom: none;
border-top: none;
border-left: none;
border-right: none;
background-color: red;
margin: 0.5rem;
width: 8rem;
height: 2.2rem;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 600;
transition: 0.2s;
cursor: pointer;
:hover{
    background-color: #2E9AFE;
}
`