import { Route, Routes } from "react-router-dom";
import Cadastro from "../Pages/Cadastrar/Cadastro";
import Login from "../Pages/Login/Login";
import { Navigate } from "react-router-dom";
import Usuario from "../Pages/Usuario/Usuario";
import { AnimatePresence } from "framer-motion";

const Router = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/usuario/:id" element={<Usuario />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
};
export default Router;
