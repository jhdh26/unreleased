import './InputText.css';
import React, { forwardRef } from 'react';

const InputText = forwardRef((props, ref) => {
    return (
        <div className="text-field">
            <div className="label-container">
                <label className={props.nameClassName}>{props.label}</label>
                <label className="label-end">{props.labelEnd}</label>
            </div>
            <input
                type={props.type} 
                className={props.inputClassName}
                placeholder={props.placeholder}
                ref={ref}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            {props.icon}
        </div>
    );
});

export default InputText;
