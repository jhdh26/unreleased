import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='header'>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='footer'>
                <h4>{props.nome}</h4>
                <h5>{props.categoria}</h5>
                <button className='rent-button' onClick={props.onClick}>Alugar</button>
            </div>
        </div>
    )
}

export default Card
