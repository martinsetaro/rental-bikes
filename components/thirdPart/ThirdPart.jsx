"use client"
import React, { useEffect } from 'react';
import style from './thirdPart.module.css';
import Image from 'next/image';
import cuatrohoras from '../../public/assets/img/logocuatro.png'
import ochohoras from '../../public/assets/img/logoocho.png'
import veinticuatrohoras from '../../public/assets/img/logoveinticuatro.png'
import doshoras from '../../public/assets/img/logodos.png'
import cuarentayochohoras from '../../public/assets/img/logocuarentayocho.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import traduccion from '../../components/traduccion'







const ThirdPart = ({translation}) => {

useEffect(()=>{
    AOS.init();
},[])




  return (
    <div className={style.contenedorTres}>
       {translation ? <h2>{traduccion.preciosPt}</h2> : <h2>{traduccion.preciosEn}</h2>}
        <div className={style.contenedorImagenes}>
       
             <div data-aos="flip-left" data-aos-duration="1000" className={style.contenedorCard}>
                <Image className={style.card}   src={doshoras} alt="4 horas" width={300} height={400}/>
             </div>
           
           <div data-aos="flip-left" data-aos-duration="1000" className={style.contenedorCard}>
                <Image className={style.card} src={cuatrohoras} alt="8 horas" width={300} height={400}/>
            </div>
            <div data-aos="flip-left" data-aos-duration="1000" className={style.contenedorCard}>
                <Image className={style.card} src={ochohoras} alt="24 horas" width={300} height={400}/>
            </div>

            <div data-aos="flip-left" data-aos-duration="1000" className={style.contenedorCard}>
                <Image className={style.card} src={veinticuatrohoras} alt="24 horas" width={300} height={400}/>
            </div>

            <div data-aos="flip-left" data-aos-duration="1000" className={style.contenedorCard}>
                <Image className={style.card} src={cuarentayochohoras} alt="24 horas" width={300} height={400}/>
            </div>

            <div className={style.contenedorElementos}>
              <h2>All included</h2>
              <h3>⚙ Helmet</h3>
              <h3>⚙ Light</h3>
              <h3>⚙ Chain with Combination</h3>
              <h3>⚙ Small inflator</h3>
             
            </div>
                
        </div>
    </div>
  )
}

export default ThirdPart