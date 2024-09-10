import './Alugar.css'
import Card from '../../components/Card'
import InputText from '../../components/InputText'
import betoneira from '../../assets/betoneira.png'

const Alugar = () => {
    return (
        <div className='main-alugar'>
            <div className="items-list">
                <div className="search">
                    <InputText
                        type='text'
                        placeholder='Pesquise por categorias'
                    />
                </div>
                <div className="cards">
                    <Card
                        buttonText='Alugar'
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                        categoria=''
                    />
                    <Card
                        buttonText='Alugar'
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                        categoria=''
                    />
                    <Card
                        buttonText='Alugar'
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                        categoria=''
                    />
                    <Card
                        buttonText='Alugar'
                        imagem={betoneira}
                        nome='Betoneira'
                        categoria=''
                        desc='Também chamada de misturador de concreto, a betoneira é um utensílio básico de toda obra. Por sua função de misturar materiais, ela é usada em diversos setores industriais, porém, dentro de uma edificação tem uma função bem específica. É nela que se coloca água, areia, cimento e agregados para a formação do concreto.'
                        preco='R$500 (Diaria)'
                    />
                </div>
            </div>
        </div>
    )
}

export default Alugar