import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { useContext, useState } from "react";

import { Formu, Section, Perror } from "./styled";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Context, IUserLogin } from "../../contexts/AuthContexts";

const FormLogin = () => {
  const [type, setType] = useState("password");

  const schema = yup.object().shape({
    email: yup.string().required("Email invalido"),
    password: yup.string().required("Senha invalida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  function typeInput() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }

  const { onSubmitLogin, cadastro } = useContext(Context);

  return (
    <Section>
      <Formu onSubmit={handleSubmit(onSubmitLogin)}>
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
            <button
              onClick={(e) => {
                typeInput();
                e.preventDefault();
              }}
              className="type-visibility"
            >
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
