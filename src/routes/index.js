import { Route, Routes } from "react-router-dom";
import Cadastro from "../Pages/Cadastrar/Cadastro";
import Login from "../Pages/Login/Login";
import { Navigate } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};
export default Router;
