import './Button.css'

const Button = (props) =>{
    return(
        <div className="main-button">
            <button className='button' type='button' value='value'>{props.text}</button>
        </div>
    )
}

export default Button