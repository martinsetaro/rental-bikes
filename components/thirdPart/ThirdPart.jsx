"use client"
import React, { useEffect } from 'react';
import style from './thirdPart.module.css';
import Image from 'next/image';
import biker from '../../public/assets/img/biker.png';
import mountain from '../../public/assets/img/mountain2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import traduccion from '../traduccion';








const ThirdPart = ({translation}) => {

useEffect(()=>{
    AOS.init();
},[])




  return (
    <div className={style.contenedorTres}>
       {translation ? <h2>{traduccion.experienciaPt}</h2> : <h2>{traduccion.experienciaEn}</h2>}
       <div className={style.containerImagenes}>
       <Image data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1500" className={style.mountainBiker} src={biker} alt="biker" title='biker'/>
       <Image data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="500" className={style.mountainImg} src={mountain} alt="mountain" title='mountain'/>
       
       </div>
    </div>
  )
}

export default ThirdPart