import styled from "styled-components"

export const Body = styled.body`

`

export const Container = styled.div`
background-color: ${(prompt)=> prompt.ChangeBg ? "white" : "black"};
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const Button = styled.div`
border-radius: 100px;
background-color: ${(prompt)=> prompt.ChangeCT ? "yellow" : "white"};
color: ${(prompt)=> prompt.ChangeCT ? "white" : "black"};
height: 100px;
width: 100px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 0 20px 0px yellow;
border: none;
`

