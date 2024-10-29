import './Button.css'

const Button = (props) =>{
    return(
        <div className="main-button">
            <button className='button' onClick={props.onClick} type={props.type} text={props.text}value='value'>{props.text}</button>
        </div>
    )
}

export default Button