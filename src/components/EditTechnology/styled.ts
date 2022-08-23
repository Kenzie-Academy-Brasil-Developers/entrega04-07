import styled, { keyframes } from "styled-components";

const animationModalTechnology = keyframes`

0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }

`;

export const SectionFundoModalEdit = styled.section`
  width: 100vw;
  height: 100vh;
  background: rgba(18, 18, 20, 0.5);

  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalEdit = styled.form`
  animation: ${animationModalTechnology} 0.2s
    cubic-bezier(0.39, 0.575, 0.565, 1) both;

  width: 25rem;
  height: 15rem;

  border-radius: 0.2rem;

  background-color: var(--grey-3);

  .divTop {
    width: 100%;
    height: 25%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 0.2rem 0.2rem 0 0;

    background-color: var(--grey-2);

    h4 {
      margin-left: 1.5rem;
      color: white;
      font-weight: bold;
      font-size: 14px;
    }
    svg {
      margin-right: 1rem;
      color: var(--grey-1);
      cursor: pointer;
    }
  }

  .divContent {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 75%;

    gap: 1rem;

    select {
      max-width: 90%;
      min-width: 90%;
      height: 2.5rem;
      margin: 0 auto;

      background-color: var(--grey-2);

      border-radius: 0.3rem;
      color: white;

      padding-left: 0.5rem;

      &:focus {
        outline: 0;
        border: 1px solid white;
      }
    }

    input {
      max-width: 86%;
      min-width: 86%;
      height: 2.5rem;
      margin: 0 auto;

      padding-left: 1rem;

      background-color: var(--grey-2);

      border-radius: 0.3rem;
      color: white;
      font-weight: 500;
      border: 2px solid transparent;

      -webkit-text-fill-color: white !important;
      color: white;

      &:focus {
        outline: 0;
        border: 2px solid white;
      }
    }

    label {
      margin-left: 1.5rem;
      color: white;
      font-size: 14px;
      font-weight: 200;
    }

    .divButtons {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1.8rem;
      margin-top: 0.5rem;

      button {
        height: 2.5rem;
        padding: 0 2.6rem;

        border: unset;
        border-radius: 0.3rem;

        color: white;

        font-weight: bold;
        font-size: 14px;
      }

      .buttonSave {
        background-color: rgba(89, 50, 63, 1);
      }
      .buttonRemove {
        background-color: var(--grey-1);
      }
    }

    .error {
      height: 15px;
      width: max-content;
      margin: -0.4rem 0 -0.5rem 1.5rem;

      display: flex;
      align-items: center;

      gap: 0.5rem;
      color: red;
    }
    p {
      height: 15px;
      font-size: 13px;
      font-weight: 600;
      width: max-content;
      color: red;
    }
  }
`;
