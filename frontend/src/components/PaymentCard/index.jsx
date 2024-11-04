import './PaymentCard.css'

const PaymentCard = (props) =>{
    return(
        <div className='main-paymentCard'>
            <h2 className={props.className1}>{props.firstText}</h2>
            <h1 className={props.className2}>{props.secondText}</h1>
        </div>
    )
}

export default PaymentCard