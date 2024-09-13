import './PersonalProfile.css'

const PersonalProfile = () => {
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
                <h1>Informações gerais</h1>
                <div className="content-right">
                    <div className="right-options">
                        <h2>Opção 1</h2>
                        <h2>Opção 2</h2>
                        <h2>Opção 3</h2>
                        <h2>Opção 4</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalProfile