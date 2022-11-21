"use client"
import React, { useEffect } from 'react';
import style from './thirdPart.module.css';
import Image from 'next/image';
import cuatrohoras from '../../../src/img/logocuatro.png'
import ochohoras from '../../../src/img/logoocho.png'
import veinticuatrohoras from '../../../src/img/logoveinticuatro.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 







const ThirdPart = () => {

useEffect(()=>{
    AOS.init();
},[])




  return (
    <div className={style.contenedorTres}>
        <h2>Rent a city bike</h2>
        <div className={style.contenedorImagenes}>
       
             <div data-aos="flip-left" data-aos-duration="1000" className={style.contenedorCard}>
                <Image className={style.card}   src={cuatrohoras} alt="4 horas" width={300} height={400}/>
             </div>
           
           <div data-aos="flip-left" data-aos-duration="1000" className={style.contenedorCard}>
                <Image className={style.card} src={ochohoras} alt="8 horas" width={300} height={400}/>
            </div>
            <div data-aos="flip-left" data-aos-duration="1000" className={style.contenedorCard}>
                <Image className={style.card} src={veinticuatrohoras} alt="24 horas" width={300} height={400}/>
            </div>
                
        </div>
    </div>
  )
}

export default ThirdPart