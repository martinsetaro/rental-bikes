import React, { useState } from 'react';
import style from './style.module.css';
import  Link from 'next/link'
import SecondPart from '../components/SecondPart/SecondPart';
import ThirdPart from '../components/thirdPart/ThirdPart';
import FourPart from '../components/FourPart/FourPart';
import Layout from '../components/Layout'
import Image from 'next/image';
import brasil from '../public/assets/img/brasil.jpg'
import usa from '../public/assets/img/usa.png'
import traduccion from './traduccion';






export default function HomePage() {
   
  const[translation , setTranslation] = useState(false)
  
 

  
 


const handlerTraducirPt = () =>{

 setTranslation(true)
 localStorage.setItem('idioma',translation);
 
}
const handlerTraducirEn = () =>{

  setTranslation(false)
  localStorage.setItem('idioma',translation);
  
 }

  return (
  
  <Layout>
    <div className={style.containerPrincipal}>
      <div className={style.traductor}>
        <Image 
        onClick={handlerTraducirPt}
        src={brasil} alt="brazil" width={60} height={40}/>
        <Image 
        onClick={handlerTraducirEn}
        src={usa} alt="usa" width={60} height={40}/>
       </div>
              <div className={style.contenedorTitulo}>
                  {translation ? <h2>{traduccion.rentalBikePt}</h2> : <h2>{traduccion.rentalBikeEn}</h2>}
                  {translation ? <h3>{traduccion.subRentalBikePt}</h3> : <h3>{traduccion.subRentalBikeEn}</h3>}
                  <Link href="https://api.whatsapp.com/send?phone=+5492616442682&text=Estoy%20enviando%20un%20mensaje%20desde%20la%20aplicacion%20web%20%22BCR%20Mountain%20Bike%20Rental%22%20,%20me%20gustaria%20tener%20m%C3%A1s%20informaci%C3%B3n.%20Muchas%20gracias!"><button className={style.btnReserva}>{translation ? `${traduccion.reservasPt}` :`${traduccion.reservasEn}`}</button></Link>
              </div>
   
  
  
    </div>
   
   <SecondPart translation={translation}/>
   <div className={style.galeriaImagenes}>
   {translation ? <h2>{traduccion.elegirBicicletaPt}</h2> : <h2>{traduccion.elegirBicicletaEn}</h2>}
    <button><Link href='/Galery'>{translation ? `${traduccion.btnReservaPt}` : `${traduccion.btnReservaEn}`}</Link></button>
   </div>
   
   <ThirdPart translation={translation}/>
   <FourPart translation={translation}/>

   </Layout>
  )
}