import { Header, SectionIntro, SectionDesenvolvimento } from "./styled";

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../contexts/AuthContexts";
import NewTechnology from "../CreateTechnology/CreateTechnology";
import Technologies from "../Technologies/Technologies";
import Loading from "../Loading/Loading";
import EditTechnology from "../EditTechnology/EditTechnolgy";

const User = () => {
  const { user, logout, loading, newTechnology, editTechnology} =
    useContext(Context);

  if (loading) return <Loading />;

  if (!user) return <Navigate replace to="/login" />;

  return (
    <>
      {editTechnology && <EditTechnology />}
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
          <Technologies />
        </SectionDesenvolvimento>
      </>
    </>
  );
};
export default User;
