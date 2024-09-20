import { useNavigate } from 'react-router-dom'
import './MyOrders.css'
import InputText from '../InputText'

const MyOrders = (props) => {

    const navigate = useNavigate()
    const navigatePerfil = () => {
        navigate('/perfil')
    }

    return (
        <div className="main-myorders">
            <div className="left-myorders">
                <h1>OPÇÕES</h1>
                <div className="myorders-content-left">
                    <p onClick={navigatePerfil}>Perfil</p>
                    <p className='on-page'>Meus pedidos</p>
                </div>
            </div>
            <div className="right-myorders">
                <div className="order-header">
                    <h1>Meus Pedidos</h1>
                    <InputText />
                </div>
                <div className="order-buttons">
                    <h1>Todos os pedidos</h1>
                    <h1>Pagos</h1>
                    <h1>Cancelados</h1>
                    <h1>Devolvidos</h1>
                </div>
                <div className="all-orders">
                    <div className="orders-text">
                        <h1>Numero do pedido:</h1>
                    </div>
                    <div className="orders-products">
                        <div className="orders-products-number">
                            <h1>#1</h1>
                            <button>Ver</button>
                        </div>
                        <div className="orders-products-number">
                            <h1>#2</h1>
                            <button>Ver</button>
                        </div>
                        <div className="orders-products-number">
                            <h1>#3</h1>
                            <button>Ver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders