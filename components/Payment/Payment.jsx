import style from './payment.module.css'
import Image from 'next/image'
import money from '../../public/assets/img/money.png'

const Payment = () => {



  return (
    <div className={style.contenedorPayment}>
        <h2>Payment methods</h2>
        <div className={style.contenedorInfoPago}>
            <div className={style.imagenPago}>
            <Image src={money} alt="img" width={50} height={50}/>
           </div>
        <div className={style.informacionPago}>
            <p>It is not necessary to make reservations, the payment is made at the moment of signing the contract and after checking everything.
Payments are accepted in Argentine Pesos, Dollars or Euros at the current exchange rate at the moment of signing the contract (the rate in Dollars or Euros may vary depending on the exchange rate of the day).</p>
        </div>
</div>
    </div>
  )
}

export default Payment