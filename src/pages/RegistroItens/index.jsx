import './RegistroItens.css';
import './ModalRegistroItens.css'
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import ItemList from '../../components/ItemList';
import { useState } from 'react';
import Modal from 'react-modal'
import InputText from '../../components/InputText'
import { IoCloseCircleOutline } from "react-icons/io5";


const RegistroItens = () => {
    const [items] = useState([
        { id: '1', name: 'Betoneira' },
        { id: '2', name: 'Trator' },
        { id: '3', name: 'Escavadeira' },
        { id: '4', name: 'Caminhão' }
    ]);

    const [popup, setPopup] = useState(false)

    function openModal() {
        setPopup(true)
    }

    function closeModal() {
        setPopup(false)
    }

    return (
        <div className="main-registro">
            <h1 className="main-titulo">CRUD</h1>
            <div className="main-crud">
                <h1>ITENS</h1>
                <button onClick={openModal}>Adicionar mais itens</button>
                <Modal
                    isOpen={popup}
                    onRequestClose={closeModal}
                    contentLabel='Logout'
                    className='modal-add-item'
                    overlayClassName='overlay-add-item'
                >
                    <div className="modal-add-item-content">
                        <div className="header-add-item">
                            <h1>Adicionar item</h1>
                            <IoCloseCircleOutline className='icon-add-item' onClick={closeModal} />
                        </div>
                        <div className="container-input-add-item">
                            <InputText
                                nameClassName='name-add-item'
                                label='Nome'
                                inputClassName='input-add-item'
                                placeholder='Digite o nome'
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Categoria'
                                inputClassName='input-add-item'
                                placeholder='Digite a categoria'
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Descrição'
                                inputClassName='input-add-item'
                                placeholder='Digite a descrição'
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Imagem'
                                inputClassName='input-add-item'
                                placeholder='DIgite o URL da imagem'
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Preço'
                                inputClassName='input-add-item'
                                placeholder='Digite o preço'
                            />
                        </div>
                        <div className="btn-add-item">
                            <button className='item-btn-clear' onClick={closeModal}>Limpar</button>
                            <button className='item-btn-add' onClick={closeModal}>Adicionar</button>
                        </div>
                    </div>
                </Modal>
                {/**/}
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
