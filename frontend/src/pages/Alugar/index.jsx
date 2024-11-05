import './Alugar.css';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import InputText from '../../components/InputText';
import { useState, useEffect } from 'react';
import api from '../../services/api.js';

const Alugar = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleButton = () =>{
        navigate('/pagamento')
    }

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
                        inputClassName='input-text-form-login'
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
                            onClick={handleButton}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alugar;
