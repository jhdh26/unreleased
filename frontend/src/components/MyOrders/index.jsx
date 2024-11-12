import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyOrders.css';
import './MyOrdersInputText.css';
import InputText from '../InputText';
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { getUserOrders } from '../../services/api'; // Importe a função para buscar os pedidos

const MyOrders = () => {
    const navigate = useNavigate();
    const navigatePerfil = () => {
        navigate('/perfil');
    };

    const [pedidos, setPedidos] = useState([]); // Lista de pedidos do usuário
    const [pedidoSelecionado, setPedidoSelecionado] = useState(null); // Estado para controlar o pedido selecionado
    const [error, setError] = useState(null); // Estado para controle de erro
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento
    const [searchTerm, setSearchTerm] = useState(''); // Estado para controle do filtro de pesquisa

    useEffect(() => {
        async function fetchPedidos() {
            try {
                const response = await getUserOrders(); // Chama a função para buscar os pedidos
                setPedidos(response); // Armazena os pedidos
            } catch (err) {
                console.error("Erro ao carregar os pedidos:", err);
                setError("Não foi possível carregar os pedidos.");
            } finally {
                setLoading(false); // Atualiza o estado de carregamento
            }
        }

        fetchPedidos();
    }, []);

    // Função para filtrar os pedidos com base no ID
    const filteredPedidos = pedidos.filter(pedido =>
        pedido.id.toString().includes(searchTerm) // Filtra pelo ID do pedido
    );

    const togglePedido = (pedido) => {
        if (pedidoSelecionado === pedido) {
            setPedidoSelecionado(null); // Fecha se já estiver aberto
        } else {
            setPedidoSelecionado(pedido); // Abre o novo pedido
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Atualiza o termo de pesquisa
    };

    if (loading) return <p>Carregando pedidos...</p>;
    if (error) return <p>{error}</p>;

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
                        value={searchTerm}
                        onChange={handleSearchChange} // Adiciona a lógica de pesquisa
                    />
                </div>
                <div className="all-orders">
                    <div className="orders-line"></div>
                    <div className="orders-products">
                        {filteredPedidos.length === 0 ? (
                            <p>Você não tem nenhum pedido.</p>
                        ) : (
                            filteredPedidos.map((pedido) => (
                                <div className="orders-products-number" key={pedido.id}>
                                    <h1>{pedido.id}</h1>
                                    <button className='myoders-btn' onClick={() => togglePedido(pedido.id)}>
                                        {pedidoSelecionado === pedido.id ? 'Ocultar' : 'Ver'}
                                    </button>
                                    {pedidoSelecionado === pedido.id && (
                                        <div className="pedido-detalhes">
                                            <ul>
                                                {Array.isArray(pedido.produtos) && pedido.produtos.length > 0 ? (
                                                    pedido.produtos.map((item, index) => (
                                                        <li key={index}>
                                                            <p><strong>Produto:</strong> {item.nome}</p> {/* Ajuste aqui */}
                                                            <p><strong>Dias de Aluguel:</strong> {item.diasAluguel}</p> {/* Ajuste aqui */}
                                                        </li>
                                                    ))
                                                ) : (
                                                    <p>Este pedido não tem produtos disponíveis.</p>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
