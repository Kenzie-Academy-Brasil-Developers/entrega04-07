import { FundoModal, ModalCreateTechnology } from "./styled";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../contexts/AuthContexts";
import { useForm } from "react-hook-form";

const NewTechnology = () => {
  const { setNewTechnology, createTechnology } = useContext(Context);
  const { register, handleSubmit } = useForm();

  return (
    <FundoModal>
      <ModalCreateTechnology onSubmit={handleSubmit(createTechnology)}>
        <div className="divTop">
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setNewTechnology(false)}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="divContent">
          <label htmlFor="title-technology">Nome</label>
          <input
            type="text"
            placeholder="Nova Tecnologia"
            {...register("title")}
          />

          <label htmlFor="status">Selecionar status</label>
          <select
            name=""
            id="status"
            placeholder="Status"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </div>
      </ModalCreateTechnology>
    </FundoModal>
  );
};
export default NewTechnology;
