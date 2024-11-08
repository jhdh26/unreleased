import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api.js';

const Pagamento = () => {
    const { id } = useParams(); // Obtém o ID do pedido da URL
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchOrder() {
            try {
                // Fazendo a requisição para o backend com o ID da ordem
                const response = await api.get(`/orders/create/${id}`);
                setOrder(response.data); // Armazenando os dados da ordem
            } catch (error) {
                console.error("Erro ao carregar os detalhes do pedido:", error);
                setError("Não foi possível carregar os detalhes do pedido.");
            }
        }

        fetchOrder();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!order) return <p>Carregando pedido...</p>;

    return (
        <div className="main-pagamento">
            <div className="payment">
                <header className='payment-header'>
                    <h1>TELA DE PAGAMENTO</h1>
                </header>
                <div className="payment-methods">
                    <div className="payment-card">
                        <h2>Pedido #{order.id}</h2>
                        <p>Produto: {order.product.name}</p>
                        <p>Preço: R${order.product.preco}</p>
                        <p>Dias de Aluguel: {order.diasAluguel}</p>
                    </div>
                    {/* QR Code e botão de pagamento */}
                </div>
            </div>
        </div>
    );
};

export default Pagamento;
