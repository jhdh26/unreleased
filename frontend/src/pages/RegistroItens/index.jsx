import './RegistroItens.css';
import './ModalRegistroItens.css'
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import ItemList from '../../components/ItemList';
import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal'
import InputText from '../../components/InputText'
import { IoCloseCircleOutline } from "react-icons/io5";
import api from '../../services/api.js'


const RegistroItens = () => {
    const [products, setProducts] = useState([])

    async function getProducts() {
        const productsFromApi = await api.get('/registroitens')

        setProducts(productsFromApi.data)
        console.log(productsFromApi.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const inputName = useRef()
    const inputCategoria = useRef()
    const inputDescricao = useRef()
    const inputImagem = useRef()
    const inputPreco = useRef()
    const inputQuantidade = useRef()

    async function addProducts() {
        try {
            await api.post('/registroitens', {
                name: inputName.current.value,
                categoria: inputCategoria.current.value,
                descricao: inputDescricao.current.value,
                imagem: inputImagem.current.value,
                preco: parseInt(inputPreco.current.value),
                quantidade: parseInt(inputQuantidade.current.value)
            });

            getProducts();
            closeModal();
        } catch (err) {
            console.error('Erro ao adicionar produto:', err); // 
            alert('Erro ao adicionar produto.'); // 
        }
    }


    async function deleteProduct(id) {
        await api.delete(`/registroitens/${id}`)

        getProducts();
    }

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
                                ref={inputName}
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Categoria'
                                inputClassName='input-add-item'
                                placeholder='Digite a categoria'
                                ref={inputCategoria}
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Descrição'
                                inputClassName='input-add-item'
                                placeholder='Digite a descrição'
                                ref={inputDescricao}
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Imagem'
                                inputClassName='input-add-item'
                                placeholder='DIgite o URL da imagem'
                                ref={inputImagem}
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Preço'
                                inputClassName='input-add-item'
                                placeholder='Digite o preço'
                                ref={inputPreco}
                            />
                            <InputText
                                nameClassName='name-add-item'
                                label='Quantidade'
                                inputClassName='input-add-item'
                                placeholder='Digite a quantidade'
                                ref={inputQuantidade}
                            />
                        </div>
                        <div className="btn-add-item">
                            <button className='item-btn-clear' onClick={closeModal}>Limpar</button>
                            <button className='item-btn-add' onClick={addProducts}>Adicionar</button>
                        </div>
                    </div>
                </Modal>
                <ul className='custom-list'>
                    {products.map((product) => (
                        <ItemList
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            firstIcon={<FaEdit />}
                            onFirstIconClick={null}
                            secondIcon={<FaTrash />}
                            onSecondIconClick={() => deleteProduct(product.id)}
                            thirdIcon={<FaEye />}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RegistroItens;
