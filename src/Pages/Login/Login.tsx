import FormLogin from "../../components/FormLogin/FormLogin";
import { Main } from "./styled";
import { motion } from "framer-motion";
const Login = () => {
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
        <h1>Kenzie Hub</h1>
        <FormLogin />
      </motion.div>
    </Main>
  );
};
export default Login;
