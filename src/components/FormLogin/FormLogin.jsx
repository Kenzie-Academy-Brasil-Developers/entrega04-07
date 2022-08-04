import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Formu, Section } from "./styled";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");

  function typeInput(e) {
    e.preventDefault();
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }

  const cadastro = (e) => {
    e.preventDefault()
    navigate("/cadastrar", { replace: true });
  };

  return (
    <Section>
      <Formu>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="E-mail" />

          <label htmlFor="password">Senha</label>

          <input
            type={type}
            id="password"
            placeholder="Senha"
            className="password"
          />
          <button onClick={typeInput} className="type-visibility">
            {type === "password" ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        </div>
        <button className="login">Entrar</button>
      </Formu>
      <div className="divFooter">
        <span>Ainda não possui uma conta?</span>
        <button onClick={cadastro}>Cadastrar-se</button>
      </div>
    </Section>
  );
};
export default FormLogin;
