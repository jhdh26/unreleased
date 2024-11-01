import './PersonalProfile.css';
import './ModalLogout.css';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { MdExitToApp } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useAuth } from '../../components/AuthContext/AuthContext';
import InputText from '../../components/InputText';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../services/api'; // Altere a importação aqui

const PersonalProfile = () => {
    const navigate = useNavigate();
    const { logout, userId } = useAuth(); // Obtenha o userId do AuthContext

    const [profile, setProfile] = useState(null);
    const [popup, setPopup] = useState(false);

    // Função para buscar o perfil do usuário
    const fetchUserProfile = async () => {
        try {
            const userProfile = await getUserProfile(); // Remova o userId, use o token
            console.log('Perfil do usuário:', userProfile);
            setProfile(userProfile);
        } catch (error) {
            console.error('Erro ao buscar perfil:', error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); // Obtenha o token do localStorage
        if (token) {
            fetchUserProfile(); // Chame a função quando o token estiver disponível
        }
    }, []);

    const openModal = () => setPopup(true);
    const closeModal = () => setPopup(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const navigatePedidos = () => {
        navigate('/pedidos');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    
    const handleEnderecoChange = (e) => {
        setEndereco(e.target.value);
    };

    return (
        <div className="main-personalprofile">
            <div className="left-personalprofile">
                <h1>OPÇÕES</h1>
                <div className="content-left">
                    <div className="profile-on-page">
                        <CgProfile />
                        <p>Perfil</p>
                    </div>
                    <div className="left-line" />
                    <div onClick={navigatePedidos} className="profile-off-page">
                        <MdOutlineShoppingBag />
                        <p>Pedidos</p>
                    </div>
                </div>
            </div>
            <div className="right-personalprofile">
                <div className="content-right">
                    <div className="right-profile">
                        <div className="right-profile-header">
                            <h1>Perfil</h1>
                            <button onClick={openModal}>Logout</button>
                            <Modal
                                isOpen={popup}
                                onRequestClose={closeModal}
                                contentLabel='Logout'
                                className='modal-logout'
                                overlayClassName='overlay-logout'
                            >
                                <div className="modal-logout-content">
                                    <MdExitToApp className='logout-icon' />
                                    <h1>Logout</h1>
                                    <h2>Você tem certeza que quer fazer o logout?</h2>
                                    <button className='modal-btn-logout' onClick={handleLogout}>Logout</button>
                                    <button className='modal-btn-cancel' onClick={closeModal}>Cancelar</button>
                                </div>
                            </Modal>
                        </div>
                        <div className="right-profile-items">
                            <div className="items-left-profile">
                                <img src={profile ? profile.imgPerfil : 'default-profile-pic-url.png'} alt="Profile" />
                                <div className="left-profile-text">
                                    <h1>{profile ? profile.name : 'Carregando...'}</h1>
                                    <h2>{profile ? profile.endereco : ''}</h2>
                                </div>
                            </div>
                            <div className="items-right-profile">
                                <button className='btn-left'>Adicionar nova foto</button>
                                <button className='btn-right'>Excluir foto</button>
                            </div>
                        </div>
                    </div>
                    <div className='right-profile-inputs'>
                        <div className="right-profile-input-mail">
                            <InputText
                                placeholder='Insira seu email'
                                inputClassName='input-text-profile'
                                nameClassName='name-profile'
                                label='Mail'
                                icon={<IoMailUnread className='form-icon-profile' />}
                                value={profile ? profile.email : ''}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="right-profile-input-phone">
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder='Insira seu numero de telefone'
                                nameClassName='name-profile'
                                label='Numero'
                                icon={<IoPhonePortrait className='form-icon-profile' />}
                                value={profile ? profile.numero : ''}
                                onChange={handlePhoneChange}
                            />
                        </div>
                    </div>
                    <div className="right-profile-password-low">
                        <InputText
                            inputClassName='input-text-profile-low'
                            placeholder='Insira seu endereço'
                            nameClassName=''
                            type='text'
                            label='Insira seu endereço'
                            value={profile ? profile.endereco : ''}
                            onChange={handleEnderecoChange}
                        />
                    </div>
                    <div className="right-profile-password">
                        <div className="right-profile-password-top">
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder='Insira sua senha atual'
                                type='password'
                                nameClassName='name-profile'
                                label='Senha'
                            />
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder='Insira a nova senha'
                                type='password'
                                nameClassName='name-profile'
                                label='Nova senha'
                            />
                        </div>
                    </div>
                    <div className="save-changes">
                        <button className='btn-delete'>Cancelar</button>
                        <button className='btn-att'>Atualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalProfile;
