import styled, { keyframes } from "styled-components";


export const AnimateLoad = keyframes`
from{
    transform: rotate(360deg);
}


`

export const Load = styled.div`
width: 3rem;
height: 3rem;
border: 15px solid var(--pink);
border-radius: 50%;
border-top-color: transparent;
animation: ${AnimateLoad} 0.5s infinite linear;

`

export const FundoLoad = styled.section`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`