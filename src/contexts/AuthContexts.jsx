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
  const [technologies, setTechnologies] = useState([]);
  const [editTechnology, setEditTechnology] = useState(false);
  const [idTech, setIdTech] = useState();

  const tech = () => {
    return setTechnologies(user.techs);
  };
  //FUNÇÃO PARA FAZER REQUISIÇÃO USANDO O TOKEN E VERIFICAR SE EXISTE USER
  useEffect(() => {
    const LoadUser = async () => {
      const token = localStorage.getItem("context:token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/profile`);
          setUser(data);
          setTechnologies(data.techs);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    LoadUser();
  }, [user]);

  //FUNÇÃO QUE FAZ LOGIN
  const onSubmitLogin = ({ email, password }) => {
    const userObject = { email, password };
    api
      .post("/sessions", userObject)
      .then((response) => {
        toast.success("Login");
        setUser(response.data.user);
        tech();
        localStorage.setItem("context:token", response.data.token);
        navigate(`/usuario`, { replace: true });
      })
      .catch((response) => toast.error("Email ou senha invalido"));
  };

  //FUNÇÃO QUE PASSA OS VALORES DOS INPUTS E CADASTRAR USER OU RETORNA ERROR
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

  //FUNÇÃO QUE DIRECIONA PARA PAGE CADASTRAR
  const cadastro = (e) => {
    e.preventDefault();
    navigate("/cadastrar", { replace: true });
  };

  //FUNÇÃO LOGOUT
  function logout() {
    localStorage.removeItem("context:token");
    localStorage.removeItem("context:user_id");
    setLoading(true);
    setUser();
    navigate("/login", { replace: true });
  }

  //FUNÇÃO CRIAR NOVA TECNOLOGIA
  const createTechnology = async (data) => {
    await api
      .post("/users/techs", data)
      .then((res) => {
        toast.success("Technologia cadastrada");
        setNewTechnology(false);
      })
      .catch((res) => toast.error("Technologia já cadastrada"));
  };

  //FUNÇÃO REMOVER TECNOLOGIA
  const removeTech = (event) => {
    event.preventDefault();
    api.delete(`/users/techs/${idTech}`);
    toast.success("Tecnologia removida!");
    setEditTechnology(false);
  };

  //FUNÇÃO EDITAR STATUS TECNOLOGIA
  const editStatus = (data) => {
    api.put(`/users/techs/${idTech}`, data).then((res) => {
      toast.success(`Status editado para ${data.status}`);
      setEditTechnology(false);
    }).catch((error) => console.log(error));
  };
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
        technologies,
        createTechnology,
        setEditTechnology,
        editTechnology,
        setIdTech,
        removeTech,
        editStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};
