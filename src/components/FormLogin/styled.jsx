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
    padding: 3rem 2rem ;
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
    }

    input:focus {
      outline: 0;
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
