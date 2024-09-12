import './RegistroItens.css';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa'; // Importando ícones
import InputText from '../../components/InputText';
import ItemList from '../../components/ItemList';

const RegistroItens = () => {
    return (
        <div className="main-registro">
            <h1 className="main-titulo">CRUD</h1>
            <div className="main-crud">
                <h1>ITENS</h1>
                <InputText
                    placeholder="Pesquise aqui"
                />
                <ul className='custom-list'>
                    <ItemList
                        id='1'
                        name='Betoneira'
                        firstIcon={<FaEdit />}
                        secondIcon={<FaTrash />}
                        thirtyIcon={<FaEye />}
                    />
                    <ItemList
                        id='2'
                        name='Betoneira'
                        firstIcon={<FaEdit />}
                        secondIcon={<FaTrash />}
                        thirtyIcon={<FaEye />}
                    />
                    <ItemList
                        id='3'
                        name='Betoneira'
                        firstIcon={<FaEdit />}
                        secondIcon={<FaTrash />}
                        thirtyIcon={<FaEye />}
                    />
                    <ItemList
                        id='4'
                        name='Betoneira'
                        firstIcon={<FaEdit />}
                        secondIcon={<FaTrash />}
                        thirtyIcon={<FaEye />}
                    />
                </ul>
            </div>
        </div>
    );
}

export default RegistroItens;
