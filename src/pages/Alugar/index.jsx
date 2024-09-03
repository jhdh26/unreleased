import './Alugar.css'
import Card from '../../components/Card'
import InputText from '../../components/InputText'

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
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                        categoria=''
                    />
                    <Card
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                        categoria=''
                    />
                    <Card
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                        categoria=''
                    />
                    <Card
                        imagem='https://github.com/jhdh26.png'
                        nome='João'
                        categoria=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Alugar