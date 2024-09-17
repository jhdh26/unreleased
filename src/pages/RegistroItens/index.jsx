import './RegistroItens.css';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import ItemList from '../../components/ItemList';
import { useState } from 'react';

const RegistroItens = () => {
    const [items] = useState([
        { id: '1', name: 'Betoneira' },
        { id: '2', name: 'Trator' },
        { id: '3', name: 'Escavadeira' },
        { id: '4', name: 'Caminhão' }
    ]);

    return (
        <div className="main-registro">
            <h1 className="main-titulo">CRUD</h1>
            <div className="main-crud">
                <h1>ITENS</h1>
                <ul className='custom-list'>
                    {items.map(item => (
                        <ItemList
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            firstIcon={<FaEdit />}
                            secondIcon={<FaTrash />}
                            thirdIcon={<FaEye />}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RegistroItens;
