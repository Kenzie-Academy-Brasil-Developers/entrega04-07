import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/index";
import { toast } from "react-toastify";

interface IContextProps {
  children: ReactNode;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserCadastro {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  course_module: string;
  contact: number;
}

interface IUserEditStatus {
  status: string;
}

export interface IUserCreateTechnology {
  id: string;
  title: string;
  status: string;
}

interface ContextValues {
  onSubmitLogin: (data: IUserLogin) => void;
  cadastro: (e: any) => void;
  createTechnology: (data: IUserCreateTechnology) => void;
  removeTech: (event: any) => void;
  editStatus: (data: IUserEditStatus) => void;
  onSubmitCadastrar: ({
    name,
    password,
    email,
    bio,
    contact,
    course_module,
  }: IUserCadastro) => void;
  logout: () => void;
  user: IUserCadastro | undefined;
  loading: boolean;
  setNewTechnology: Dispatch<SetStateAction<boolean>>;
  newTechnology: boolean;
  technologies: IUserCreateTechnology[];
  setEditTechnology: Dispatch<SetStateAction<boolean>>;
  editTechnology: boolean;
  setIdTech: Dispatch<SetStateAction<string | undefined>>;
}

export const Context = createContext<ContextValues>({} as ContextValues);

export const ContextProvider = ({ children }: IContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserCadastro>();
  const [loading, setLoading] = useState<boolean>(true);
  const [newTechnology, setNewTechnology] = useState<boolean>(false);
  const [technologies, setTechnologies] = useState<IUserCreateTechnology[]>([]);
  const [editTechnology, setEditTechnology] = useState<boolean>(false);
  const [idTech, setIdTech] = useState<string>();

  //FUNÇÃO PARA FAZER REQUISIÇÃO USANDO O TOKEN E VERIFICAR SE EXISTE USER
  useEffect(() => {
    const LoadUser = async () => {
      const token = localStorage.getItem("context:token");
      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
  const onSubmitLogin = ({ email, password }: IUserLogin) => {
    const userObject = { email, password };
    api
      .post("/sessions", userObject)
      .then((response: any) => {
        toast.success("Login");
        setUser(response.data.user);
        setTechnologies(response.data.user.techs);
        localStorage.setItem("context:token", response.data.token);
        navigate(`/usuario`, { replace: true });
      })
      .catch((response: any) => toast.error("Email ou senha invalido"));
  };

  //FUNÇÃO QUE PASSA OS VALORES DOS INPUTS E CADASTRAR USER OU RETORNA ERROR
  const onSubmitCadastrar = ({
    name,
    password,
    email,
    bio,
    contact,
    course_module,
  }: IUserCadastro) => {
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
      .then(() => {
        toast.success("Conta criada!");
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1000);
      })
      .catch(() => {
        toast.error("Conta ja existe!");
      });
  };

  //FUNÇÃO QUE DIRECIONA PARA PAGE CADASTRAR
  const cadastro = (e: any) => {
    e.preventDefault();
    navigate("/cadastrar", { replace: true });
  };

  //FUNÇÃO LOGOUT
  function logout() {
    localStorage.removeItem("context:token");
    localStorage.removeItem("context:user_id");
    setLoading(true);
    setUser(undefined);
    navigate("/login", { replace: true });
  }

  //FUNÇÃO CRIAR NOVA TECNOLOGIA
  const createTechnology = async (data: IUserCreateTechnology) => {
    await api
      .post("/users/techs", data)
      .then(() => {
        toast.success("Technologia cadastrada");
        setNewTechnology(false);
      })
      .catch(() => toast.error("Technologia já cadastrada"));
  };

  //FUNÇÃO REMOVER TECNOLOGIA
  const removeTech = (event: any) => {
    event.preventDefault();
    api.delete(`/users/techs/${idTech}`);
    toast.success("Tecnologia removida!");
    setEditTechnology(false);
  };

  //FUNÇÃO EDITAR STATUS TECNOLOGIA
  const editStatus = (data: IUserEditStatus) => {
    api
      .put(`/users/techs/${idTech}`, data)
      .then((res) => {
        toast.success(`Status editado para ${data.status}`);
        setEditTechnology(false);
      })
      .catch((error) => console.log(error));
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


