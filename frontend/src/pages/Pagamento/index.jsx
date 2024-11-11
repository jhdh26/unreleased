import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOrder, decreaseProductQuantity } from '../../services/api.js';

const Pagamento = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    const goProfile = () =>{
        navigate('/perfil')
    }

    useEffect(() => {
        async function fetchOrder() {
            try {
                setLoading(true);
                const orderData = await getOrder(id);
                setOrder(orderData);
            } catch (error) {
                console.error("Erro ao carregar os detalhes do pedido:", error);
                setError("Não foi possível carregar os detalhes do pedido.");
            } finally {
                setLoading(false);
            }
        }

        fetchOrder();
    }, [id]);

    const handlePayment = async () => {
        try {
            await decreaseProductQuantity(order.product.id); // Chama a função para diminuir a quantidade
            window.alert('Pagamento realizado com sucesso!');
            navigate('/perfil'); // Redireciona após o alert
        } catch (error) {
            console.error("Erro ao processar o pagamento:", error.response?.data || error.message);
            alert("Erro ao processar o pagamento.");
        }
    };    

    if (loading) return <p>Carregando pedido...</p>;
    if (error) return <p>{error}</p>;

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
                    <div className="payment-options">
                        <button onClick={handlePayment}>Pagar Agora</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagamento;
