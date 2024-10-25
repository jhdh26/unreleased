import './Alugar.css'
import Card from '../../components/Card'
import InputText from '../../components/InputText'
import betoneira from '../../assets/betoneira.png'
import { useState, useEffect } from 'react'
import api from '../../services/api.js'

const Alugar = () => {

    const [itens] = useState([
        { button: 'Alugar', name: 'Betoneira', imagem: betoneira, preco: 'R$500' },
        { button: 'Alugar', name: 'Trator', imagem: betoneira, preco: 'R$1000' },
        { button: 'Alugar', name: 'Escavadeira', imagem: betoneira, preco: 'R$2000' },
        { button: 'Alugar', name: 'Caminhao', imagem: betoneira, preco: 'R$4300' }
    ])

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/registroitens')
                setItems(response.data);
                console.log(response)
            } catch (error) {
                console.error("Erro ao carregar os produtos:", error)
            }
        }

        getProducts()
    }, []);

    return (
        <div className='main-alugar'>
            <div className="items-list">
                <div className="search">
                    <InputText
                        type='text'
                        placeholder='Pesquise por categorias'
                        inputClassName='input-text-form-login'
                    />
                </div>
                <div className="cards">
                    {items.map(item => (
                        <Card
                            key={items.id}
                            buttonText='Alugar'
                            imagem={item.imagem}
                            nome={item.name}
                            categoria={item.categoria}
                            desc={item.descricao}
                            preco={item.preco}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Alugar