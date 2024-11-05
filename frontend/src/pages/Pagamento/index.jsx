import './Pagamento.css'
import QRCode from 'react-qr-code'

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
                        <h1>QR Code:</h1>
                        <QRCode
                            value='www.google.com'
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            viewBox={`0 0 256 256`}
                        />
                        <button>COPIAR CODIGO</button>
                    </div>
                    <div className="payment-info">
                        <div className="payment-div-info">
                            <h1>PRODUTO:</h1>
                            <h2>Nome</h2>
                            <h2>Imagem</h2>
                            <h2>Preco</h2>
                            <h2>Quantidade</h2>
                        </div>
                    </div>
                </div>
                <div className="payment-complete">
                    <h1>JÁ PAGOU?</h1>
                    <button> CONFIRME SUA COMPRA AQUI</button>
                </div>
            </div>
        </div>
    )
}

export default Pagamento