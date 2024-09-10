import './IconCard.css'

const IconCard = (props) => {
    return (
        <div className='icon-card'>
            {props.icon}
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default IconCard