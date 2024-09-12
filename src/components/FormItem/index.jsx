import './FormItem.css'

import InputText from '../../components/InputText'
import Button from '../../components/Button'

const FormItem = () => {
    return (
        <div className='form-item-main'>
            <div className="form-item-form">
                <h1>Registrar</h1>
                <InputText
                label='Nome do Item'
                placeholder=''
                />
                <InputText
                label='Link da imagem'
                placeholder=''
                />
                <InputText
                label='Sobre'
                placeholder=''
                />
                <InputText
                label='Preço'
                placeholder=''
                />
                <Button
                text='Enviar'
                />
            </div>
        </div>
    )
}

export default FormItem