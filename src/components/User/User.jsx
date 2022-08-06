import { useEffect, useState } from "react";
import api from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { Header, SectionIntro, SectionDesenvolvimento } from "./styled";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/users/${params.id}`).then((res) => setUser(res.data));
  }, [params.id]);

  function sair() {
    navigate("/login", { replace: true });
  }

  return (
    <>
      {user?.name && (
        <>
          <Header>
            <h1>Kenzie Hub</h1>
            <button onClick={sair}>Sair</button>
          </Header>
          <SectionIntro>
            <div>
              <h2>Olá {user.name}</h2>
              <span>{user.course_module}</span>
            </div>
          </SectionIntro>
          <SectionDesenvolvimento>
            <h3>Que pena! Estamos em desenvolvimento :(</h3>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </SectionDesenvolvimento>
        </>
      )}
    </>
  );
};
export default User;
