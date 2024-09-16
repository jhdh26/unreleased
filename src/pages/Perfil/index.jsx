import './Perfil.css'

import PersonalProfile from '../../components/PersonalProfile'

const Perfil = () => {
    return (
        <div className="main-perfil">
            <PersonalProfile
                nome='João Henrique Duarte Heindyk'
                endereco='Rua Prefeito Domingos Mocelin Neto'
            />
        </div>
    )
}

export default Perfil