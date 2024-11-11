import './Principal.css'
import '../../components/Card/ModalStyles.css'
import Popup from '../../components/IconCard'
import Card from '../../components/Card'
import { IoNewspaperOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GiCommercialAirplane } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api.js'

const Principal = () => {

    const navigate = useNavigate();
    const onButtonHandle = () => {
        navigate('/alugar');
    };

    const wpp = () => {
        window.open('https://wa.me/5541991316392', '_blank');
    };

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/registroitens')
                setItems(response.data);
            } catch (error) {
                console.error("Erro ao carregar os produtos:", error)
            }
        }

        getProducts()
    }, []);

    return (
        <div className='main-principal'>
            <div className='principal'>
                <h2>Locação de peças e maquinas</h2>
                <h1>sua obra perfeita</h1>
                <button className='principal-button' onClick={wpp} >Faça um orçamento</button>
            </div>
            <div className='secundaria'>
                <div className='div-alugar-main'>
                    <h2>Por que optar pelo aluguel? </h2>
                    <h1>Economize tempo e dinheiro!</h1>
                    <div className='div-alugar'>
                        <Popup
                            icon={<IoNewspaperOutline className='icon-styles' />}
                            title='Economia assegurada!'
                            text='Alugar máquinas é a opção mais econômica, perfeita para quem precisa de equipamentos por um período limitado.'
                        />
                        <Popup
                            icon={<VscTools className='icon-styles' />}
                            title='Sem complicações!'
                            text='Em caso de falhas, nossos equipamentos alugados são rapidamente substituídos, evitando atrasos no seu projeto.'
                        />
                        <Popup
                            icon={<GiCommercialAirplane className='icon-styles' />}
                            title='Rapidez e confiança!'
                            text='Obtenha seus equipamentos de forma ágil e segura, com transporte eficiente e um processo de contratação simplificado.'
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
                <h2>Abaixo:</h2>
                <div className='catalog'>
                    {items.slice(0, 3).map(item => (
                        <Card
                            key={item.id}
                            buttonText="Ver mais"
                            imagem={item.imagem}
                            nome={item.nome}
                            categoria={item.categoria}
                            desc={item.desc}
                            preco={item.preco}
                            onClick={onButtonHandle}
                        />
                    ))}
                </div>
                <h1>Veja mais a baixo:</h1>
                <button className='principal-button' onClick={onButtonHandle}>Clique para ver</button>
            </div>
        </div>
    )
}

export default Principal;
