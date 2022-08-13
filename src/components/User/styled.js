import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 10vh;

  background-color: var(--grey-4);

  font-family: var(--font);

  border-bottom: 3px solid var(--grey-3);

  h1 {
    color: var(--pink);
    font-size: 2rem;
    font-weight: bolder;
    flex-wrap: nowrap;
  }

  button {
    border: unset;
    border-radius: 0.3rem;

    padding: 0.6rem 1.4rem;

    color: white;
    background-color: var(--grey-3);
  }
`;

export const SectionIntro = styled.section`
  height: 20vh;

  background-color: var(--grey-4);
  color: white;
  font-weight: bold;

  border-bottom: 3px solid var(--grey-3);

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 58%;

    display: flex;
    justify-content: space-between;
  }
`;

export const SectionDesenvolvimento = styled.section`
  height: max-content;
  padding-bottom: 3rem;

  background-color: var(--grey-4);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;

  h3 {
    font-weight: bolder;
    font-size: 1.5rem;
  }
`;

export const Main = styled.main`
  height: 100vh;
  font-family: var(--font);
  background-color: var(--grey-4);
`;
