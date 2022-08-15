import { useContext } from "react";
import { Context } from "../../contexts/AuthContexts";
import { SectionFundoModalEdit, ModalEdit } from "./styled";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdError } from "react-icons/md";

const EditTechnology = () => {
  const { setEditTechnology, removeTech, editStatus } = useContext(Context);
  const formSchema = yup.object().shape({
    status: yup.string().required("Inserir novo status"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
            <option value="">Escolha status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message && (
            <div className="error">
              <MdError />
              <p>{errors.status.message}</p>
            </div>
          )}
          <div className="divButtons">
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
