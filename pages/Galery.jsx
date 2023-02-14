import React, { useEffect , useState } from "react";
import Image from "next/image";
import style from "../pages/galery.module.css";
import styles from '../pages/style.module.css'
import rider from "../public/assets/img/rider.png";
import riderDos from "../public/assets/img/riderDos.jpg";
import Layout from "../components/Layout";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../public/assets/img/img1.jpeg";
import img5 from "../public/assets/img/img5.jpeg";
import img6 from "../public/assets/img/img6.jpeg";
import img7 from "../public/assets/img/img7.jpeg";
import img8 from "../public/assets/img/img8.jpeg";
import img9 from "../public/assets/img/img9.jpeg";
import img10 from "../public/assets/img/img10.jpeg";
import img11 from "../public/assets/img/img11.jpeg";
import img12 from "../public/assets/img/img12.jpeg";
import img13 from "../public/assets/img/img13.jpeg";
import img14 from "../public/assets/img/img14.jpeg";
import img15 from "../public/assets/img/img15.jpeg";
import img16 from "../public/assets/img/img16.jpeg";
import img17 from "../public/assets/img/img17.jpeg";
import img18 from "../public/assets/img/img18.jpeg";
import img19 from "../public/assets/img/img19.jpeg";
import img20 from "../public/assets/img/img20.jpeg";
import Payment from "../components/Payment/Payment";
import brasil from '../public/assets/img/brasil.jpg';
import usa from '../public/assets/img/usa.png';
import traduccion from "../components/traduccion";



const Galery = () => {


  const [ translation , setTranslation ] = useState(false)

  useEffect(() => {
    AOS.init();
  }, []);


  const handlerTraducirEn = ()=>{
    setTranslation(false)
  }
  const handlerTraducirPt= ()=>{
    setTranslation(true)
  }


  return (
    <>
      <Layout>
        <div className={style.contenedorGaleria}>
        <div className={styles.traductor}>
        <Image 
        onClick={handlerTraducirPt}
        src={brasil} alt="brazil" width={60} height={40}/>
        <Image 
        onClick={handlerTraducirEn}
        src={usa} alt="usa" width={60} height={40}/>
       </div>
          <button className={style.buttonClass}><Link href="/">
            {translation ? `${traduccion.btnHomePt}` : `${traduccion.btnHomeEn}`}
            </Link></button>
          {translation ? <h2>{traduccion.elegirBicicletaPt}</h2> : <h2>{traduccion.elegirBicicletaEn}</h2>}
          <div className={style.contenedorInformacion}>
            <div
              className={style.contenedorImagen}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Image src={rider} alt="rider" width={400} height={300} />
              <Image src={riderDos} alt="rider" width={400} height={300} />
            </div>
            <div
              className={style.informacion}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {translation ? <p>🟢 {traduccion.textoUnoPt}</p> : <p>🟢 {traduccion.textoUnoEn}</p>}
              {translation ? <p>🟢 {traduccion.textoDosPt}</p> : <p>🟢 {traduccion.textoDosEn}</p>}
              {translation ? <p>🟢 {traduccion.textoTresPt}</p> : <p>🟢 {traduccion.textoTresEn}</p>}
              {translation ? <p>🟢 {traduccion.textoCuatroPt}</p> : <p>🟢 {traduccion.textoCuatroEn}</p>}
              {translation ? <p>🟢 {traduccion.textoCincoPt}</p> : <p>🟢 {traduccion.textoCincoEn}</p>}
             
              <Link href="https://api.whatsapp.com/send?phone=+5492616442682&text=Estoy%20enviando%20un%20mensaje%20desde%20la%20aplicacion%20web%20%22BCR%20Mountain%20Bike%20Rental%22%20,%20me%20gustaria%20tener%20m%C3%A1s%20informaci%C3%B3n.%20Muchas%20gracias!"><button className={style.btnReserva}>{translation ? "Faça uma reserva" : "Make a reservation"}</button></Link>
            </div>
          </div>

          <div className={style.contenedorDatosExtras}>
            <div className={style.sillasninos}>
            {translation ? <h2>{traduccion.familiaPt}</h2> : <h2>{traduccion.familiaEn}</h2>}
            {translation ? <h2>{traduccion.sillasninosPt}</h2> : <h2>{traduccion.sillasninosEn}</h2>}
            {translation ? <h4>{traduccion.adicionalPt}</h4> : <h4>{traduccion.adicionalEn}</h4>}
            </div>
            <div className={style.contenedorCardDatosExtras}>
                {translation ? <h2>{traduccion.tamañoPt}</h2> : <h2>{traduccion.tamañoEn}</h2>}
            </div>
            
          </div>

          <div className={style.tituloGalery}>
             {translation ? <h2>Galeria</h2> : <h2>Galery</h2>}
          </div>
         

          <div className={style.slider}>
           
            <ul>
              <li>
                <Image src={img1} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img18} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img19} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img20} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img5} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img6} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img7} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img8} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img9} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img10} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img11} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img12} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img13} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img14} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img15} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img16} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img17} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img18} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img19} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img20} alt="img" width={500} height={500} />
              </li>
            </ul>
          </div>
          <Payment translation={translation}/>
        </div>
      </Layout>
    </>
  );
};

export default Galery;
