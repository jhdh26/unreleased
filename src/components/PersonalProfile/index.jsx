import './PersonalProfile.css'
import './ModalLogout.css'
import { useState } from 'react';
import Modal from 'react-modal'
import { MdExitToApp } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";

import InputText from '../../components/InputText'
import { useNavigate } from 'react-router-dom';

const PersonalProfile = (props) => {

    const navigate = useNavigate()
    const onNavigate = () => {
        navigate('/')
    }

    const navigatePedidos = () => {
        navigate('/pedidos')
    }

    const [popup, setPopup] = useState(false)

    function openModal() {
        setPopup(true)
    }

    function closeModal() {
        setPopup(false)
    }

    return (
        <div className="main-personalprofile">
            <div className="left-personalprofile">
                <h1>OPÇÕES</h1>
                <div className="content-left">
                    <div className="profile-on-page">
                        <CgProfile />
                        <p>Perfil</p>
                    </div>
                    <div className="left-line"/>
                    <div className="profile-off-page">
                        <MdOutlineShoppingBag />
                        <p onClick={navigatePedidos}>Pedidos</p>
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
                                    <h2>Voce tem certeza que quer fazer o logout?</h2>
                                    <button className='modal-btn-logout' onClick={onNavigate}>Logout</button>
                                    <button className='modal-btn-cancel' onClick={closeModal}>Cancelar</button>
                                </div>
                            </Modal>
                        </div>
                        <div className="right-profile-items">
                            <div className="items-left-profile">
                                <img src='https://github.com/jhdh26.png' />
                                <div className="left-profile-text">
                                    <h1>{props.nome}</h1>
                                    <h2>{props.endereco}</h2>
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

                            />
                        </div>
                        <div className="right-profile-input-phone">
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder='Insira seu numero de telefone'
                                nameClassName='name-profile'
                                label='Numero'
                                icon={<IoPhonePortrait className='form-icon-profile' />}
                            />
                        </div>
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
                        <div className="right-profile-password-low">
                            <InputText
                                inputClassName='input-text-profile-low'
                                placeholder='Insira novamente sua nova senha'
                                nameClassName=''
                                type='password'
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
    )
}

export default PersonalProfile