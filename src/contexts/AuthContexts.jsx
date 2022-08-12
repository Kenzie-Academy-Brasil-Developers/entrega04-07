import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/index";
import { toast } from "react-toastify";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [newTechnology, setNewTechnology] = useState(false);

  useEffect(() => {
    const LoadUser = async () => {
      const token = localStorage.getItem("context:token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/profile`);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
    };
    LoadUser();
  }, [user]);

  const onSubmitLogin = ({ email, password }) => {
    const userObject = { email, password };
    api
      .post("/sessions", userObject)
      .then((response) => {
        toast.success("Login");
        setUser(response.data.user);
        localStorage.setItem("context:token", response.data.token);
        navigate(`/usuario/${response.data.user.id}`, { replace: true });
      })
      .catch((response) => toast.error("Email ou senha invalido"));
  };

  const onSubmitCadastrar = ({
    name,
    password,
    email,
    bio,
    contact,
    course_module,
  }) => {
    const user = {
      name,
      password,
      email,
      bio,
      contact,
      course_module,
    };
    api
      .post("/users", user)
      .then((response) => {
        toast.success("Conta criada!");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1000);
      })
      .catch((response) => {
        toast.error("Conta ja existe!");
      });
  };

  const cadastro = (e) => {
    e.preventDefault();
    navigate("/cadastrar", { replace: true });
  };

  function logout() {
    localStorage.removeItem("context:token");
    localStorage.removeItem("context:user_id");
    setLoading(true);
    setUser();
    navigate("/login", { replace: true });
  }

  return (
    <Context.Provider
      value={{
        onSubmitLogin,
        onSubmitCadastrar,
        cadastro,
        logout,
        user,
        loading,
        setNewTechnology,
        newTechnology,
      }}
    >
      {children}
    </Context.Provider>
  );
};
