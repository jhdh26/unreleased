import { useState, useEffect } from 'react';
import './FormLogin.css';
import InputText from '../InputText';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../../services/api'; // Importe as funções de API
import { useAuth } from '../AuthContext/AuthContext'; // Importe o AuthContext

const FormLogin = () => {
    const { isAuthenticated, login } = useAuth(); // Desestruture o contexto
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se o usuário está autenticado
        if (isAuthenticated) {
            navigate('/principal'); // Redireciona se o usuário estiver autenticado
        }
    }, [isAuthenticated, navigate]);

    const handleSwitchForm = () => {
        setIsLoginVisible(prev => !prev);
        setErrorMessage(''); // Limpa a mensagem de erro ao mudar de formulário
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const onButtonHandle = async (event) => {
        event.preventDefault(); // Previne o reload da página

        const { name, email, password, confirmPassword } = formData;

        if (isLoginVisible) {
            // Verifica se todos os campos do login estão preenchidos
            if (!email || !password) {
                setErrorMessage('Por favor, preencha todos os campos.');
                return;
            }

            try {
                const response = await loginUser({ email, password });
                login(response); // Chama a função de login com o objeto que contém token e userId
                localStorage.setItem('token', response.token); // Armazena o token no localStorage
                localStorage.setItem('userId', response.userId); // Armazena o userId no localStorage
                navigate('/principal'); // Redireciona para a página principal
            } catch (error) {
                setErrorMessage(error.response?.data?.message || 'Erro ao realizar login.');
            }
        } else {
            // Verifica se todos os campos de registro estão preenchidos
            if (!name || !email || !password || !confirmPassword) {
                setErrorMessage('Por favor, preencha todos os campos.');
                return;
            }

            // Verifica se as senhas são iguais
            if (password !== confirmPassword) {
                setErrorMessage('As senhas não coincidem.');
                return;
            }

            try {
                await registerUser({ name, email, password });
                setErrorMessage('Usuário registrado com sucesso!');
                setFormData({ name: '', email: '', password: '', confirmPassword: '' }); // Limpa os campos após registro
            } catch (error) {
                setErrorMessage(error.response?.data?.message || 'Erro ao registrar usuário.');
            }
        }
    };

    return (
        <div className="main-form">
            <div className={`left-form ${isLoginVisible ? 'hidden' : ''}`}>
                <div className="register-card">
                    <h1>REGISTRO</h1>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <InputText
                        label='Nome Completo'
                        type='text'
                        placeholder='Insira seu nome completo'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <InputText
                        label='Email'
                        type='email'
                        placeholder='Insira seu email de registro'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputText
                        label='Senha'
                        type='password'
                        placeholder='Insira a senha de sua conta'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <InputText
                        label='Repetir senha'
                        type='password'
                        placeholder='Insira a senha novamente'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <Button
                        onClick={onButtonHandle}
                        text='criar'
                        type='button' 
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
                <form className="register-card" onSubmit={onButtonHandle}>
                    <h1>LOGIN</h1>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <InputText
                        label='Email'
                        type='text'
                        placeholder='Digite aqui seu email'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputText
                        label='Senha'
                        labelEnd='Esqueceu sua senha?'
                        type='password'
                        placeholder='Digite aqui sua senha'
                        inputClassName='input-text-form-login'
                        nameClassName='name-form-login'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
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
