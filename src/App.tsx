import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./Global/GlobalStyled";
import Router from "./routes";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <ToastContainer/>
    </>
  );
}

export default App;
