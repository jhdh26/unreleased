import './InputText.css'

const InputText = (props) => {
    return (
        <div className="text-field">
            <div className="label-container">
                <label className={props.nameClassName}>{props.label}</label>
                <label className="label-end">{props.labelEnd}</label>
            </div>
            <input type={props.type} className={props.inputClassName} placeholder={props.placeholder} />
        </div>
    )
}

export default InputText

