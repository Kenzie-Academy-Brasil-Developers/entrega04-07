import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Formu, Section, Perror } from "./styled";
import api from "../../services/index";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const FormLogin = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");

  const schema = yup.object().shape({
    email: yup.string().required("Email invalido"),
    password: yup.string().required("Senha invalida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const cadastro = (e) => {
    e.preventDefault();
    navigate("/cadastrar", { replace: true });
  };

  function typeInput(e) {
    e.preventDefault();
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }
  const onSubmit = ({ email, password }) => {
    const user = { email, password };
    api
      .post("/sessions", user)
      .then((response) => {
        toast.success("Login");

        navigate(`/usuario/${response.data.user.id}`);
      })
      .catch((response) => toast.error("Email ou senha invalido"));
  };

  return (
    <Section>
      <Formu onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <Perror>{errors.email?.message}</Perror>

          <label htmlFor="password">Senha</label>
          <div>
            <input
            autoComplete="off"
              type={type}
              id="password"
              placeholder="Senha"
              className="password"
              {...register("password")}
            />

            <button onClick={typeInput} className="type-visibility">
              {type === "password" ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
          </div>
            <Perror>{errors.password?.message}</Perror>
        </div>
        <button type="submit" className="login">
          Entrar
        </button>
      </Formu>
      <div className="divFooter">
        <span>Ainda não possui uma conta?</span>
        <button onClick={cadastro}>Cadastrar-se</button>
      </div>
    </Section>
  );
};
export default FormLogin;
