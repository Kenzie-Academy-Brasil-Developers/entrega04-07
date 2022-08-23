import styled, { keyframes } from "styled-components";

export const FundoModal = styled.section`
  width: 100vw;
  height: 100vh;
  background: rgba(18, 18, 20, 0.5);

  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const animationModalTechnology = keyframes`

0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }

`;

export const ModalCreateTechnology = styled.form`
  width: 90%;
  height: 20rem;
  background-color: var(--grey-3);

  @media screen and (min-width: 536px) {
    width: 480px;
  }

  border-radius: 0.2rem;

  .divTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background-color: var(--grey-2);

    height: 15%;

    border-radius: 0.2rem 0.2rem 0 0;

    h3 {
      color: white;
      font-size: 14px;
      font-weight: bold;
    }

    button {
      width: max-content;
      height: max-content;

      border: unset;
      background-color: unset;
      padding: 0;

      color: var(--grey-1);
    }
  }

  .divContent {
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2.5rem;

    gap: 1rem;

    label {
      color: white;
      font-weight: 200;
      font-size: 14px;
    }

    input,
    select {
      width: 90%;
      height: 2.5rem;

      opacity: 0.5;

      padding-left: 0.5rem;

      -webkit-box-shadow: 0 0 0 30px var(--grey-2) inset;
      -webkit-text-fill-color: white !important;
      color: white;

      border: solid 1px white;
      border-radius: 0.3rem;

      &:focus {
        outline: 0;
        opacity: 1;
      }

      option {
        color: black;
      }
    }
    input {
      width: 88%;
    }

    button {
      width: 90%;
      height: 2.5rem;

      margin-top: 1rem;
      border-radius: 0.3rem;
      border: unset;

      background-color: var(--pink);
      color: white;
      font-weight: bold;
      font-size: 14px;
    }
  }

  animation: ${animationModalTechnology} 0.2s
    cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
