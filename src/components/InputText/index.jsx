import './InputText.css'

const InputText = (props) => {
    return (
        <div className="text-field">
            <div className="label-container">
                <label className="label-text">{props.label}</label>
                <label className="label-end">{props.labelEnd}</label>
            </div>
            <input type={props.type} className="input-text" placeholder={props.placeholder} />
        </div>
    )
}

export default InputText

