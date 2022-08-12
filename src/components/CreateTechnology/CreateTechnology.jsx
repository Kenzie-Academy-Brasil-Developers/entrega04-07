import { FundoModal, ModalCreateTechnology } from "./styled";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../contexts/AuthContexts";

const NewTechnology = () => {
  const { setNewTechnology } = useContext(Context)


  return (
    <FundoModal>
      <ModalCreateTechnology>
        <div className="divTop">
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setNewTechnology(false)}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="divContent">
          <label htmlFor="title-technology">Nome</label>
          <input type="text" />

          <label htmlFor="status">Selecionar status</label>
          <select name="" id="status" placeholder="Status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </div>
      </ModalCreateTechnology>
    </FundoModal>
  );
};
export default NewTechnology;
