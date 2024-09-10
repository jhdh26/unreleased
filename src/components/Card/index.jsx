import Modal from 'react-modal'
import { useState } from 'react'

import { IoCloseCircleOutline } from "react-icons/io5";

import './Card.css'
import './ModalStyles.css'


Modal.setAppElement('#root');

const Card = (props) => {

    const [modalOpen, setModalOpen] = useState(false)

    function openModal() {
        setModalOpen(true)
    }

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div className='card'>
            <div className='header'>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='footer'>
                <h4>{props.nome}</h4>
                <h5>{props.categoria}</h5>
                <button className='rent-button' onClick={openModal}>{props.buttonText}</button>
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel='Compre aqui'
                    className='customModal'
                    overlayClassName='customOverlay'
                >
                    <div className='modal-header'>
                        <h1>{props.nome}</h1>
                        <IoCloseCircleOutline className='customIcon' onClick={closeModal} />
                    </div>
                    <img src={props.imagem} alt={props.nome} />
                    <p>{props.desc}</p>
                    <h2>{props.preco}</h2>
                    <button className='rent-button' onClick={closeModal}>Comprar</button>
                </Modal>
            </div>
        </div>
    )
}

export default Card
