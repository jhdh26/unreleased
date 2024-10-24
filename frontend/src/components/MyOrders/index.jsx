import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyOrders.css';
import './MyOrdersInputText.css';
import InputText from '../InputText';
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";

const MyOrders = (props) => {
    const navigate = useNavigate();
    const navigatePerfil = () => {
        navigate('/perfil');
    };

    // Lista de pedidos e seus detalhes
    const pedidos = [1, 2, 3];
    const detalhesPedidos = {
        1: ['Produto A', 'Produto B', 'Produto C'],
        2: ['Produto D', 'Produto E'],
        3: ['Produto F', 'Produto G', 'Produto H', 'Produto I']
    };

    const [pedidoSelecionado, setPedidoSelecionado] = useState(null); // Estado para controlar o pedido selecionado

    const togglePedido = (pedido) => {
        if (pedidoSelecionado === pedido) {
            setPedidoSelecionado(null); // Fecha se já estiver aberto
        } else {
            setPedidoSelecionado(pedido); // Abre o novo pedido
        }
    };

    return (
        <div className="main-myorders">
            <div className="left-myorders">
                <h1>OPÇÕES</h1>
                <div className="myorders-content-left">
                    <div onClick={navigatePerfil} className="order-off-page">
                        <CgProfile />
                        <p>Perfil</p>
                    </div>
                    <div className="left-line" />
                    <div className="order-on-page">
                        <MdOutlineShoppingBag />
                        <p>Pedidos</p>
                    </div>
                </div>
            </div>
            <div className="right-myorders">
                <div className="order-header">
                    <h1>Meus Pedidos</h1>
                    <InputText
                        type='text'
                        placeholder='Pesquise o número do pedido'
                        inputClassName='myorder-input-text'
                    />
                </div>
                <div className="all-orders">
                    <div className="orders-line"></div>
                    <div className="orders-products">
                        {pedidos.map((pedido) => (
                            <div className="orders-products-number" key={pedido}>
                                <h1>{pedido}</h1>
                                <button onClick={() => togglePedido(pedido)}>
                                    {pedidoSelecionado === pedido ? 'Ocultar' : 'Ver'}
                                </button>
                                {pedidoSelecionado === pedido && (
                                    <div className="pedido-detalhes">
                                        <ul>
                                            {detalhesPedidos[pedido].map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
