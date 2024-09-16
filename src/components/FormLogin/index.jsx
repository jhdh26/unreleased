import { useState } from 'react';
import './FormLogin.css';
import InputText from '../InputText';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const [isLoginVisible, setIsLoginVisible] = useState(false);

    const handleSwitchForm = () => {
        setIsLoginVisible(prev => !prev)
    }

    const navigate = useNavigate()
    const onButtonHandle = (event) => {
        event.preventDefault()
        navigate('/principal')
    }

    return (
        <div className="main-form">
            <div className={`left-form ${isLoginVisible ? 'hidden' : ''}`}>
                <div className="register-card">
                    <h1>REGISTRO</h1>
                    <InputText
                        label='Email'
                        type='email'
                        placeholder='Insira seu email de registro'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                    />
                    <InputText
                        label='Senha'
                        type='password'
                        placeholder='Insira a senha de sua conta'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                    />
                    <InputText
                        label='Repetir senha'
                        type='password'
                        placeholder='Insira a senha novamente'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                    />
                    <Button
                        onClick={onButtonHandle}
                        text='criar'
                    />
                    <div className="account-container">
                        <label className='first-label'>Já tem conta em nosso site?</label>
                        <label className='second-label' onClick={handleSwitchForm}>
                            Faça o login
                        </label>
                    </div>
                </div>
            </div>
            <div className={`right-form ${isLoginVisible ? 'visible' : ''}`}>
                <form className="register-card">
                    <h1>LOGIN</h1>
                    <InputText
                        label='Email'
                        type='email'
                        placeholder='Digite aqui seu email'
                    />
                    <InputText
                        label='Senha'
                        labelEnd='Esqueceu sua senha?'
                        type='password'
                        placeholder='Digite aqui sua senha'
                    />
                    <Button
                        onClick={onButtonHandle}
                        text='entrar'
                    />
                    <div className="account-container">
                        <label className='first-label'>Não tem conta?</label>
                        <label className='second-label' onClick={handleSwitchForm}>
                            Cadastre-se aqui
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;
