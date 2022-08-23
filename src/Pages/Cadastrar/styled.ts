import styled from "styled-components";

export const Main = styled.main`
height: 200vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: #121212;
  color: white;
  font-family: var(--font);

  .divHeader {
    width: 90vw;
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 1rem;

    h1 {
      height: max-content;

      margin-left: 1rem;

      font-size: 1.5rem;
      font-weight: bolder;

      color: var(--pink);
    }
    button {
      width: 5rem;
      height: 2rem;

      color: white;
      background-color: var(--grey-2);

      margin-right: 1rem;

      border-radius: 0.3rem;
      border: unset;
    }

    @media screen and (min-width: 450px) {
      width: 405px;
    }
  }
`;
