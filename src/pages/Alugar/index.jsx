import './Alugar.css'
import Card from '../../components/Card'
import InputText from '../../components/InputText'
import betoneira from '../../assets/betoneira.png'
import { useState } from 'react'

const Alugar = () => {

const [itens] = useState([
    {button:'Alugar', name: 'Betoneira', imagem: betoneira, preco: 'R$500'},
    {button:'Alugar', name: 'Trator', imagem: betoneira, preco: 'R$1000'},
    {button:'Alugar', name: 'Escavadeira', imagem: betoneira, preco: 'R$2000'},
    {button:'Alugar', name: 'Caminhao', imagem: betoneira, preco: 'R$4300'}
])

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
                    {itens.map(item =>(
                        <Card
                        buttonText={item.button}
                        imagem={item.imagem}
                        nome={item.name}
                        categoria=''
                        desc='Também chamada de misturador de concreto, a betoneira é um utensílio básico de toda obra. Por sua função de misturar materiais, ela é usada em diversos setores industriais, porém, dentro de uma edificação tem uma função bem específica. É nela que se coloca água, areia, cimento e agregados para a formação do concreto.'
                        preco={item.preco}
                    />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Alugar