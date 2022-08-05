import FormCadastro from "../../components/FormCadastro/index.jsx"
import { Main } from "./styled.jsx"
import { useNavigate } from 'react-router-dom'


const Cadastro = () => {

    const navigate = useNavigate()

    const voltar = () => {
        navigate('/login', { replace: true })
    }

    return(
    <Main>
        <div className="divHeader">
            <h1>Kenzie Hub</h1>
            <button onClick={voltar} >Voltar</button>
        </div>
        <FormCadastro/>
    </Main>
)
}
export default Cadastro