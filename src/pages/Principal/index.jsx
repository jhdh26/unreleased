import './Principal.css'
import '../../components/Card/ModalStyles.css'
import Popup from '../../components/IconCard'
import Card from '../../components/Card'
import { IoNewspaperOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GiCommercialAirplane } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import betoneira from '../../assets/betoneira.png'

const Principal = () => {

    const navigate = useNavigate()
    const onButtonHandle = () => {
        navigate('/alugar')
    }

const wpp = () => {
    window.open('https://wa.me/5541991316392', '_blank')
}


    const [item] = useState([
        { botao: 'Ver mais', nome: 'Betoneira', imagem: betoneira, desc: '', preco: 'R$300' },
        { botao: 'Ver mais', nome: 'Caminhão', imagem: betoneira, desc: '', preco: 'R$300' },
        { botao: 'Ver mais', nome: 'Trator', imagem: betoneira, desc: '', preco: 'R$300' }
    ])

    return (
        <div className='main-principal'>
            <div className='principal'>
                <h2>Locação de peças</h2>
                <h1>Tudo para a sua obra</h1>
                <button className='principal-button' onClick={wpp} >Faça um orçamento</button>
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
                    {item.map(item => (
                        <Card
                            buttonText={item.botao}
                            imagem={item.imagem}
                            nome={item.nome}
                            categoria=''
                            desc={item.desc}
                            preco={item.preco}
                        />
                    ))}
                </div>
                <h1>Veja mais a baixo:</h1>
                <button className='principal-button' onClick={onButtonHandle}>Clique para ver</button>
            </div>
        </div>
    )
}

export default Principal

