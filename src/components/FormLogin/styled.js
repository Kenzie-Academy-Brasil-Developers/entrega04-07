import styled from "styled-components";

export const Section = styled.section`
  width: 95vw;
  height: max-content;

  border-radius: 0.3rem;
  background-color: var(--grey-3);
  font-family: var(--font);

  .divFooter {
    width: inherit;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.8rem;
    margin-top: 3rem;

    span {
      color: var(--grey-1);
    }

    button {
      width: 90%;
      height: 3rem;

      border: unset;
      border-radius: 0.5rem;

      background-color: var(--grey-1);
      color: white;

      margin-bottom: 1rem;

      font-weight: bold;
      font-size: 0.9rem;
    }
  }

  @media screen and (min-width: 450px) {
    width: 426px;
  }
`;

export const Formu = styled.form`
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 3rem 2rem;
    font-weight: bold;
    font-size: 1.3rem;
    font-family: var(--font);
    color: white;
  }

  div {


    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 90%;


    label {
      width: max-content;
      color: white;
      margin-left: 0.5rem;
    }

    input {
      max-width: 100%;
      height: 3rem;

      border: 1px solid white;
      border-radius: 0.5rem;

      padding-left: 1rem;

      background-color: var(--grey-2);
      color: white;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px var(--grey-2) inset;
        -webkit-text-fill-color: white !important;
      }
    }

    input:focus {
      outline: 0;
    }
    div {
      position: relative;
      min-width: 100%;

      flex-direction: row;
      align-items: center;

      border: 1px solid white;
      border-radius: 0.5rem;

      background-color: var(--grey-2);
      input {
        border: unset;
        min-width: 85%;
      }

      button {
        position: absolute;
        right: 0;

        min-width: 10%;
        height: max-content;

        display: flex;
        justify-content: center;

        border: unset;
        background-color: unset;
        color: white;
      }
    }
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 3rem;

    margin-top: 1.3rem;
    border-radius: 0.5rem;
    border: unset;

    background-color: var(--pink);
    color: white;

    font-weight: bold;
    font-size: 0.9rem;
  }
`;


export const Perror = styled.p`
height: 12px;

margin: -0.6rem 0 0 0.8rem;

color: var(--error);

font-size: 12px;

`