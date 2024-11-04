import './Pagamento.css'

import PaymentCard from '../../components/PaymentCard'

const Pagamento = () => {
    return (
        <div className="main-pagamento">
            <div className="payment">
                <header className='payment-header'>
                    <h1>TELA DE PAGAMENTO</h1>
                </header>
                <div className="payment-methods">
                    <div className="payment-card">
                        <PaymentCard
                            firstText='PEDIDO'
                            className1='payment-text1-grey'
                            secondText='1'
                            className2='payment-text2-grey'
                        />
                        <PaymentCard
                            firstText='SUA COMPRA'
                            className1='payment-text1-grey'
                            secondText='1'
                            className2='payment-text2-green'
                        />
                        <PaymentCard
                            firstText='PAGAMENTO VIA'
                            className1='payment-text1-grey'
                            secondText='PIX'
                            className2='payment-text2-green'
                        />
                    </div>
                    <div className="payment-qr-code">
                        <h1>QRCODE</h1>
                    </div>
                    <div className="payment-info">
                        <div className="payment-div-info">
                            <h1>PRODUTO:</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagamento