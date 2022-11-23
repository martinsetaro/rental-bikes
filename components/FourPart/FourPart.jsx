"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import style from "./fourPart.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import herramientas from "../../public/assets/img/herramientas.png";
import mapa from "../../public/assets/img/mapa.png";
import montana from "../../public/assets/img/montana.png";
import bicycle from "../../public/assets/img/bicycle.png";
import traduccion from "./traduccion";


const FourPart = ({translation}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  

  return (
    <div className={style.contenedorCuatro}>
     {translation ? <h2>{traduccion.titlePt}</h2> : <h2>{traduccion.titleEn}</h2>}
      <div className={style.contenedorInformacion}>
          <div className={style.tarjetas} data-aos="zoom-in-down" data-aos-duration="1000">
                <Image src={herramientas} alt="img" width={80} height={80} />
               {translation ? <p>{traduccion.herramientasPt}</p> : <p>{traduccion.herramientasEn}</p>}
          </div>
          <div className={style.tarjetas} data-aos="zoom-in-down" data-aos-duration="1000">
                <Image src={montana} alt="img" width={80} height={80} />
               {translation ? <p>{traduccion.mountainPt}</p> : <p>{traduccion.mountainEn}</p>}
          </div>
          <div className={style.tarjetas} data-aos="zoom-in-down" data-aos-duration="1000">
                <Image src={mapa} alt="img" width={80} height={80} />
               {translation ? <p>{traduccion.mapasPt}</p> : <p>{traduccion.mapasEn}</p>}
          </div>
          <div className={style.tarjetas} data-aos="zoom-in-down" data-aos-duration="1000">
                <Image src={bicycle} alt="img" width={80} height={80} />
               {translation ? <p>{traduccion.bicicletaPt}</p> : <p>{traduccion.bicicletaEn}</p>}
          </div>
        
      </div>
    </div>
  );
};

export default FourPart;
