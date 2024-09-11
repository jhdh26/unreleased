import './Principal.css'
import '../../components/Card/ModalStyles.css'
import Popup from '../../components/IconCard'
import Card from '../../components/Card'
import { IoNewspaperOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GiCommercialAirplane } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import Modal from 'react-modal'

const Principal = () => {

    const navigate = useNavigate()
    const onButtonHandle = () => {
        navigate('/alugar')
    }

    const [popup, setPopup] = useState(false)

    function openModal() {
        setPopup(true)
    }

    function closeModal() {
        setPopup(false)
    }

    return (
        <div className='main-principal'>
            <div className='principal'>
                <h2>Locação de peças</h2>
                <h1>Tudo para a sua obra</h1>
                <button className='principal-button' onClick={openModal} >Faça um orçamento</button>
                <Modal
                    isOpen={popup}
                    onRequestClose={closeModal}
                    contentLabel='Compre aqui'
                    className='customModal'
                    overlayClassName='customOverlay'
                >
                    <div className="modal-header">
                        <h1>Entre em contato</h1>
                        <IoCloseCircleOutline className='customIcon' onClick={closeModal} />
                    </div>
                </Modal>
            </div>
            <div className='secundaria'>
                <div className='div-alugar-main'>
                    <h2>Por que alugar?</h2>
                    <h1>Economize tempo e dinheiro</h1>
                    <div className='div-alugar'>
                        <Popup
                            icon={<IoNewspaperOutline className='icon-styles' />}
                            title='Economia garantida'
                            text='Alugar máquinas é a solução mais econômica, ideal para quem precisa de equipamentos por tempo limitado'
                        />
                        <Popup
                            icon={<VscTools className='icon-styles' />}
                            title='Sem preocupações'
                            text='Em caso de falhas, nossos equipamentos alugados contam com substituição rápida, evitando qualquer atraso no seu projeto'
                        />
                        <Popup
                            icon={<GiCommercialAirplane className='icon-styles' />}
                            title='Agilidade e confiabilidade'
                            text='Garanta seus equipamentos de forma rápida e segura, com transporte eficiente e contratação simplificada'
                        />
                    </div>
                </div>
            </div>
            <div className='middle-banner'>
                <div className="first-text-middle-banner">
                    <h1>+10 anos</h1>
                    <p>De atuação no mercado</p>
                </div>
                <div className="second-text-middle-banner">
                    <h1>+18 mil</h1>
                    <p>Clientes satisfeitos</p>
                </div>
            </div>
            <div className="thirty-banner">
                <h1>Veja nosso catalogo</h1>
                <h2> Abaixo:</h2>
                <div className='catalog'>
                    <Card
                        buttonText='Alugar'
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                    />
                    <Card
                        buttonText='Alugar'
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                        categoria=''
                    />
                    <Card
                        buttonText='Alugar'
                        imagem='https://github.com/jhdh26.png'
                        nome='Betoneira'
                        categoria=''
                        desc='Também chamada de misturador de concreto, a betoneira é um utensílio básico de toda obra. Por sua função de misturar materiais, ela é usada em diversos setores industriais, porém, dentro de uma edificação tem uma função bem específica. É nela que se coloca água, areia, cimento e agregados para a formação do concreto.'
                        preco='R$500 (Diaria)'
                    />
                </div>
                <h1>Veja mais a baixo:</h1>
                <button className='principal-button' onClick={onButtonHandle}>Clique para ver</button>
            </div>
        </div>
    )
}

export default Principal

