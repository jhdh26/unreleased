import { useNavigate } from 'react-router-dom'
import './MyOrders.css'
import './MyOrdersInputText.css'
import InputText from '../InputText'
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";

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
                    <div className="order-off-page">
                        <CgProfile />
                        <p onClick={navigatePerfil}>Perfil</p>
                    </div>
                    <div className="left-line"/>
                    <div className="order-on-page">
                        <MdOutlineShoppingBag />
                        <p>Pedidos</p>
                    </div>
                </div>
            </div>
            <div className="right-myorders">
                <div className="order-header">
                    <h1>Meus Pedidos</h1>
                    <InputText
                        type='text'
                        placeholder='Pesquise o numero do pedido'
                        inputClassName='myorder-input-text'
                    />
                </div>
                <div className="all-orders">
                    <div className="orders-line">
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