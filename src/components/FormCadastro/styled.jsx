import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.3rem;
  width: 90vw;

  background-color: var(--grey-3);

  div {
    width: inherit;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 6rem;
    gap: 1.2rem;

    font-family: var(--font);
    h2 {
      font-size: 1.3rem;
      font-weight: bold;
    }
    span {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 450px) {
    width: 405px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: inherit;
  gap: 1rem;

  input {
    min-width: 85%;
    height: 2.7rem;

    margin: 0 auto;

    border: solid 1px white;

    border-radius: 0.5rem;
    padding-left: 0.5rem;

    background-color: var(--grey-2);
    color: white;

    &:focus {
      outline: 0;
      background-color: white;
      color: black;
    }

    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  label {
    width: max-content;
    margin-left: 2rem;
    font-size: 0.8rem;
  }

  select {
    width: 85%;
    height: 2.7rem;

    margin: 0 auto;

    border: 1px solid white;
    border-radius: 0.5rem;
    padding-left: 0.5rem;

    background-color: var(--grey-2);
    color: white;

    &:focus {
      outline: 0;
      background-color: white;
      color: black;
    }
  }

  button {
    width: 85%;
    height: 2.7rem;

    margin: 1rem auto 2rem;

    border: unset;
    border-radius: 0.5rem;

    background-color: var(--pink);

    font-weight: bold;
    color: white;
  }
`;
