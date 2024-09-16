import './PersonalProfile.css'

import { IoPhonePortrait } from "react-icons/io5";

import InputText from '../../components/InputText'

const PersonalProfile = (props) => {
    return (
        <div className="main-personalprofile">
            <div className="left-personalprofile">
                <h1>OPÇÕES</h1>
                <div className="content-left">
                    <p>Opção 1</p>
                    <p>Opção 2</p>
                </div>
            </div>
            <div className="right-personalprofile">
                <div className="content-right">
                    <div className="right-profile">
                        <div className="right-profile-header">
                            <h1>Perfil</h1>
                            <button>Logout</button>
                        </div>
                        <div className="right-profile-items">
                            <div className="items-left-profile">
                                <img src='https://github.com/jhdh26.png'></img>
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
                                placeholder='Escreva aqui'
                                inputClassName='input-text-profile'
                                nameClassName='name-profile'
                                label='Mail'
                            />
                        </div>
                        <div className="right-profile-input-phone">
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder={<IoPhonePortrait />}
                                nameClassName='name-profile'
                                label='Numero'
                            />
                        </div>
                    </div>
                    <div className="right-profile-password">
                        <div className="right-profile-password-top">
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder={<IoPhonePortrait />}
                                nameClassName='Insira sua senha'
                                label='Numero'
                            />
                            <InputText
                                inputClassName='input-text-profile'
                                placeholder='Insira a nova senha'
                                nameClassName='name-profile'
                                label='Numero'
                            />
                        </div>
                        <div className="right-profile-password-low">
                            <InputText
                                inputClassName='input-text-profile-low'
                                placeholder='Insira novamente sua nova senha'
                                nameClassName='name-profile'
                                label='Numero'
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