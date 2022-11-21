import React, { useEffect } from "react";
import Image from "next/image";
import style from "../pages/galery.module.css";
import rider from "../public/assets/img/rider.png";
import Layout from "../components/Layout";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../public/assets/img/img1.jpeg";
import img2 from "../public/assets/img/img2.jpeg";
import img3 from "../public/assets/img/img3.jpeg";
import img4 from "../public/assets/img/img4.jpeg";
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

const Galery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Layout>
        <div className={style.contenedorGaleria}>
          <Link href="/" className={style.buttonClass}>Home</Link>
          <h2>Choose the option you like</h2>
          <div className={style.contenedorInformacion}>
            <div
              className={style.contenedorImagen}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image src={rider} alt="rider" width={400} height={300} />
            </div>
            <div
              className={style.informacion}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p>
                We have brand new, brand new, all terrain bikes, with
                suspension, adjustable seat, foot and 21 gear combinations. All
                29 wheel with the option to choose size L (large) or M (medium)
                depending on your height and for your comfort.
              </p>
              <p>
                All 100% operational with controls for suspension, tires,
                brakes, etc.
              </p>
              <p>
                It also has a 24-hour assistance service in case of a flat tire
                or any other inconvenience.
              </p>
              <p>
                Transfer to Hotel or lodging free of charge, for delivery and
                pick up of bicycles.
              </p>
              <p>Maps of ciclovias and parks of the City of gift.</p>
              <Link href="https://api.whatsapp.com/send?phone=+5492612572051&text=Hola!%20quisiera%20obtener%20m%C3%A1s%20informacion%20sobre%20el%20alquiler%20de%20las%20bicicletas.%20Gracias"><button className={style.btnReserva}>make a reservation</button></Link>
            </div>
          </div>
          <div className={style.slider}>
            <h2>Galery</h2>
            <ul>
              <li>
                <Image src={img1} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img2} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img3} alt="img" width={500} height={500} />
              </li>
              <li>
                <Image src={img4} alt="img" width={500} height={500} />
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
        </div>
      </Layout>
    </>
  );
};

export default Galery;
