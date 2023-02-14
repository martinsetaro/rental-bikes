import style from "./payment.module.css";
import Image from "next/image";
import money from "../../public/assets/img/money.png";
import traduccion from "../../components/traduccion";

const Payment = ({translation}) => {
  return (
    <div className={style.contenedorPayment}>
     {translation ? <h2>Formas de pagamento</h2> : <h2>Payment methods</h2>}
      <div className={style.contenedorInfoPago}>
        <div className={style.imagenPago}>
          <Image src={money} alt="img" width={50} height={50} />
        </div>
        <div className={style.informacionPago}>
          {translation ? <p>{traduccion.metodoPagoPt}</p> : <p>{traduccion.metodoPagoEn}</p>}
          {translation ? <h3>{traduccion.metodoPagoTextoPt}</h3> : <h3>{traduccion.metodoPagoTextoEn}</h3>}
        </div>
      </div>
    </div>
  );
};

export default Payment;
