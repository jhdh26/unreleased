import './Popup.css'

const Popup = (props) => {
    return (
        <div className='popup'>
            {props.icon}
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Popup