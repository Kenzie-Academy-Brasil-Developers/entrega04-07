import styled from "styled-components";

export const ListTechnologies = styled.ul`
  width: 100%;
  height: max-content;
  max-height: 25rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: var(--grey-2);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: 2px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
  border-radius: 0.5rem;
  padding: 1.5rem 0;
  gap: 1rem;

  background-color: var(--grey-3);

  li {
    width: 90%;
    min-height: 3.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 0.5rem;

    background-color: var(--grey-4);

    &:hover {
      transition: 200ms;
      background-color: var(--grey-2);
    }

    h4 {
      margin-left: 1rem;
      font-weight: bold;
    }
    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-right: 1rem;

      span {
        font-weight: 200;
        font-size: 13px;
      }

      svg {
        color: var(--grey-1);
        cursor: pointer;
      }
    }
  }
`;

export const MainContent = styled.main`
  padding-top: 2rem;
  width: 350px;
  /* border: solid 1px white; */

  @media screen and (min-width: 600px){
    width: 60%;
  }

  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 17px;
      margin-left: 2rem;
    }

    button {
      width: max-content;
      border: unset;
      padding: 0;
      background-color: transparent;
      margin-right: 2rem;

      svg {
        color: white;
        font-weight: bold;
        font-size: 25px;
      }
    }
  }
`;
