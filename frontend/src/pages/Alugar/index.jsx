import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Alugar.css'
import InputText from '../../components/InputText';
import Card from '../../components/Card';
import api from '../../services/api.js';

const Alugar = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Supondo que o token JWT seja armazenado no localStorage
    const token = localStorage.getItem('token');    // Obtendo o token JWT

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/registroitens');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao carregar os produtos:", error);
                setError("Não foi possível carregar os produtos.");
                setLoading(false);
            }
        }

        getProducts();
    }, []);

    const handleRent = async (productId) => {
        if (!token) {
            setError("Usuário não autenticado.");
            return;
        }
    
        try {
            const diasAluguel = 7;  // Aqui você define os dias de aluguel
    
            const response = await api.post('/orders/create', {
                productId,   // Enviando o productId
                diasAluguel  // Enviando os dias de aluguel
            }, {
                headers: {
                    Authorization: `Bearer ${token}`  // Adicionando o token JWT ao cabeçalho da requisição
                }
            });
    
            const orderId = response.data.id;
    
            console.log("Pedido criado:", response.data); // Verificando a resposta da API
    
            // Redirecionando para a página de pagamento com o ID da ordem
            navigate(`/pagamento/${orderId}`);
        } catch (error) {
            console.error("Erro ao alugar o produto:", error);
            setError("Não foi possível criar o pedido.");
        }
    };
    
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='main-alugar'>
            <div className="items-list">
                <div className="search">
                    <InputText
                        type='text'
                        placeholder='Pesquise por nome'
                        inputClassName='input-text-form-search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {loading && <p>Carregando produtos...</p>}
                {error && <p>{error}</p>}
                <div className="cards">
                    {filteredItems.map(item => (
                        <Card
                            key={item.id}
                            buttonText='Alugar'
                            imagem={item.imagem}
                            nome={item.name}
                            categoria={item.categoria}
                            desc={item.descricao}
                            preco={item.preco}
                            onClick={() => handleRent(item.id)} // Chama handleRent com o ID do produto
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alugar;
