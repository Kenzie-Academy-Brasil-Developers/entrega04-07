import FormCadastro from "../../components/FormCadastro/index.jsx";
import { Main } from "./styled.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Cadastro = () => {
  const navigate = useNavigate();

  const voltar = () => {
    navigate("/login", { replace: true });
  };

  return (
    <Main>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.3 },
          opacity: { duration: 0.3 },
        }}
      >
        <div className="divHeader">
          <h1>Kenzie Hub</h1>
          <button onClick={voltar}>Voltar</button>
        </div>
        <FormCadastro />
      </motion.div>
    </Main>
  );
};
export default Cadastro;
