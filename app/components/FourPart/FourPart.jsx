"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import style from "./fourPart.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import herramientas from "../../../public/img/herramientas.png";
import mapa from "../../../public/img/mapa.png";
import montana from "../../../public/img/montana.png";
import bicycle from "../../../public/img/bicycle.png";

const FourPart = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={style.contenedorCuatro}>
      <h2>Why choosing BCR Mountain Bike Rental ?</h2>
      <div className={style.contenedorInformacion}>
        <div
          className={style.tarjetas}
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <Image src={herramientas} alt="img" width={80} height={80} />
          <p>
            We have our own bike repair shop, which allows us to personally take
            care of each bike. We want you to feel safe during your ride. We
            provide you with all the tools for your safety (helmet, pump, chain
            with combination).
          </p>
        </div>
        <div
          className={style.tarjetas}
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <Image src={mapa} alt="img" width={80} height={80} />
          <p>
          Our province has wonderful places that can be enjoyed in a different way when traveling by bicycle. You can be part of nature and live a beautiful experience or you can also ride along the wine roads and visit wineries and wine cellars at very short distances.
          </p>
        </div>
        <div
          className={style.tarjetas}
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <Image src={montana} alt="img" width={80} height={80} />
          <p>
          Mendoza is a city in the Cuyo region of Argentina and is the heart of Argentina's wine region, famous for its Malbecs and other red wines. Its various wineries offer tastings and guided tours.
          </p>
        </div>

        <div
          className={style.tarjetas}
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <Image src={bicycle} alt="img" width={80} height={80} />
          <p>
          Bicycles are the best way to get to know Mendoza in a few hours.
You will cover much more distance than you could walk, and you will follow a path you would never see on a bus. A bicycle has the perfect speed to breathe, feel and assimilate the vibrations of the city.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourPart;
