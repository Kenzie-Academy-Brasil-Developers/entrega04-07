import { Main } from "../../components/User/styled";
import User from "../../components/User/User";
import { motion } from "framer-motion";


const Usuario = () => (
  <Main>
    <motion.div initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 0.7}}>
    <User />
    </motion.div>
  </Main>
);
export default Usuario;
