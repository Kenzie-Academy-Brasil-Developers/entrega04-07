import { Header, SectionIntro, SectionDesenvolvimento } from "./styled";

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../contexts/AuthContexts";
import NewTechnology from "../CreateTechnology/CreateTechnology";

const User = () => {
  const { user, logout, loading, setNewTechnology, newTechnology } =
    useContext(Context);

  if (loading) return <h1 style={{ color: "white" }}>Carregando...</h1>;

  if (!user) return <Navigate replace to="/login" />;

  return (
    <>
      {newTechnology && <NewTechnology />}
      <>
        <Header>
          <h1>Kenzie Hub</h1>
          <button onClick={logout}>Sair</button>
        </Header>
        <SectionIntro>
          <div>
            <h2>Olá {user.name}</h2>
            <span>{user.course_module}</span>
          </div>
        </SectionIntro>
        <SectionDesenvolvimento>
          
        </SectionDesenvolvimento>
      </>
    </>
  );
};
export default User;
