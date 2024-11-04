import './PersonalProfile.css';
import './ModalLogout.css';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { MdExitToApp } from "react-icons/md";
import { IoPhonePortrait, IoMailUnread } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useAuth } from '../../components/AuthContext/AuthContext';
import InputText from '../../components/InputText';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, updateUserProfile, deleteProfilePicture } from '../../services/api'; // Importa a nova função

const PersonalProfile = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [profile, setProfile] = useState({});
    const [popup, setPopup] = useState(false);

    // Estados de entrada para edição de perfil
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [imgPerfil, setImgPerfil] = useState('');

    // Função para buscar o perfil do usuário
    const fetchUserProfile = async () => {
        try {
            const userProfile = await getUserProfile();
            setProfile(userProfile.data);
            setEmail(userProfile.data.email || '');
            setPhone(userProfile.data.numero || '');
            setEndereco(userProfile.data.endereco || '');
            setImgPerfil(userProfile.data.imgPerfil || '');
        } catch (error) {
            console.error('Erro ao buscar perfil:', error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserProfile();
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

    const handleSaveChanges = async () => {
        try {
            const updatedProfile = { email, numero: phone, endereco, imgPerfil };
            await updateUserProfile(updatedProfile);
            alert('Perfil atualizado com sucesso!');
            fetchUserProfile(); // Recarrega o perfil atualizado
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            alert('Erro ao atualizar perfil. Tente novamente.');
        }
    };

    const handleDeleteProfilePicture = async () => {
        try {
            await deleteProfilePicture(); // Chama a função para deletar a foto
            setImgPerfil(''); // Limpa o estado da imagem
            alert('Foto de perfil excluída com sucesso!');
            fetchUserProfile(); // Recarrega o perfil para refletir a exclusão
        } catch (error) {
            console.error('Erro ao excluir foto de perfil:', error);
            alert('Erro ao excluir foto de perfil. Tente novamente.');
        }
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
                                <img src={profile.imgPerfil || 'default-profile-pic-url.png'} alt="Profile" />
                                <div className="left-profile-text">
                                    <h1>{profile.name || 'Carregando...'}</h1>
                                    <h2>{profile.endereco || ''}</h2>
                                </div>
                            </div>
                            <div className="items-right-profile">
                                <button className='btn-left'>Adicionar nova foto</button>
                                <button className='btn-right' onClick={handleDeleteProfilePicture}>Excluir foto</button>
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="right-profile-input-phone">
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder='Insira a URL da sua foto'
                                nameClassName='name-profile'
                                label='Foto'
                                icon={<MdAddAPhoto className='form-icon-profile' />}
                                value={imgPerfil}
                                onChange={(e) => setImgPerfil(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='right-profile-inputs'>
                        <div className="right-profile-input-phone">
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder='Insira seu numero de telefone'
                                nameClassName='name-profile'
                                label='Numero'
                                icon={<IoPhonePortrait className='form-icon-profile' />}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="right-profile-input-phone">
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder='Insira seu endereço'
                                nameClassName='name-profile'
                                label='Endereço'
                                icon={<FaMapMarkerAlt className='form-icon-profile' />}
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="save-changes">
                        <button className='btn-delete'>Cancelar</button>
                        <button className='btn-att' onClick={handleSaveChanges}>Atualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalProfile;
