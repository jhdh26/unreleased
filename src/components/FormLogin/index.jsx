import { useState } from 'react';
import './FormLogin.css';
import InputText from '../InputText';
import Button from '../Button';

const FormLogin = () => {
    const [isLoginVisible, setIsLoginVisible] = useState(false);

    const handleSwitchForm = () => {
        setIsLoginVisible(prev => !prev);
    };

    return (
        <div className="main-form">
            <div className={`left-form ${isLoginVisible ? 'hidden' : ''}`}>
                <div className="register-card">
                    <h1>REGISTRO</h1>
                    <InputText
                        label='Email'
                        type='email'
                        placeholder='Insira seu email de registro'
                    />
                    <InputText
                        label='Senha'
                        type='password'
                        placeholder='Insira a senha de sua conta'
                    />
                    <InputText
                        label='Repetir senha'
                        type='password'
                        placeholder='Insira a senha novamente'
                    />
                    <Button
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
                <div className="register-card">
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
                        text='entrar'
                    />
                    <div className="account-container">
                        <label className='first-label'>Não tem conta?</label>
                        <label className='second-label' onClick={handleSwitchForm}>
                            Cadastre-se aqui
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormLogin;
