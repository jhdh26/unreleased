import './Principal.css'
import Popup from '../../components/Popup'
import { IoNewspaperOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GiCommercialAirplane } from "react-icons/gi";

const Principal = () => {
    return (
        <div className='main-principal'>
            <div className='principal'>
                <h2>Locação de peças</h2>
                <h1>Tudo para a sua obra</h1>
                <button className='principal-button'>Faça um orçamento</button>
            </div>
            <div className='secundaria'>
                <div className='div-alugar-main'>
                    <h2>Por que alugar?</h2>
                    <h1>Economize tempo e dinheiro</h1>
                    <div className='div-alugar'>
                        <Popup
                            icon={<IoNewspaperOutline className='icon-styles' />}
                            title='Menos custos'
                            text=' Alugar equipamentos é mais barato do que comprá-los, especialmente se você só precisar do equipamento por um período de tempo '
                        />
                        <Popup
                            icon={<VscTools className='icon-styles' />}
                            title='Zero manutenção'
                            text='Em casos de mal funcionamento, produtos locados têm garantia total para substituição rápida e sem atrasos em sua obra'
                        />
                        <Popup
                            icon={<GiCommercialAirplane className='icon-styles' />}
                            title='Rápido e seguro'
                            text='Tenha seu equipamento disponível no local em pouco tempo, com nosso processo de contratação facilitado e transporte rápido '
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
        </div>
    )
}

export default Principal
