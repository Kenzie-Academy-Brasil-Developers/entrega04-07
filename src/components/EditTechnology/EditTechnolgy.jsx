import { useContext } from "react";
import { Context } from "../../contexts/AuthContexts";
import { SectionFundoModalEdit, ModalEdit } from "./styled";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";

const EditTechnology = () => {
  const { setEditTechnology, removeTech, editStatus } = useContext(Context);
  const { register, handleSubmit } = useForm();

  return (
    <SectionFundoModalEdit>
      <ModalEdit onSubmit={handleSubmit(editStatus)}>
        <div className="divTop">
          <h4>Editar Tecnologia</h4>
          <AiOutlineClose onClick={() => setEditTechnology(false)} />
        </div>
        <div className="divContent">
          <label htmlFor="status">Status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <button className="buttonSave" type="submit">
              Salvar Alterações
            </button>
            <button className="buttonRemove" onClick={removeTech}>
              Excluir
            </button>
          </div>
        </div>
      </ModalEdit>
    </SectionFundoModalEdit>
  );
};
export default EditTechnology;
