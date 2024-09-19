import { useNavigate } from 'react-router-dom'
import './MyOrders.css'

const MyOrders = (props) => {

    const navigate = useNavigate ()
    const navigatePerfil = () =>{
        navigate('/perfil')
    }



    return (
        <div className="main-myorders">
            <div className="left-myorders">
                <h1>OPÇÕES</h1>
                <div className="myorders-content-left">
                    <p onClick={navigatePerfil}>Perfil</p>
                    <p>Meus pedidos</p>
                </div>
            </div>
            <div className="right-myorders">
            </div>
        </div>
    )
}

export default MyOrders