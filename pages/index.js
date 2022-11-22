import style from './style.module.css';
import  Link from 'next/link'
import SecondPart from '../components/SecondPart/SecondPart';
import ThirdPart from '../components/thirdPart/ThirdPart';
import FourPart from '../components/FourPart/FourPart';
import Layout from '../components/Layout'





export default function HomePage() {



  return (
  
  <Layout>
    <div className={style.containerPrincipal}>
              <div className={style.contenedorTitulo}>
                  <h2>Rental Bike in Mendoza</h2>
                  <h3>Your own adventure on two wheels Mendoza awaits you!!</h3>
                  <Link href="https://api.whatsapp.com/send?phone=+5492616442682&text=Estoy%20enviando%20un%20mensaje%20desde%20la%20aplicacion%20web%20%22BCR%20Mountain%20Bike%20Rental%22%20,%20me%20gustaria%20tener%20m%C3%A1s%20informaci%C3%B3n.%20Muchas%20gracias!"><button className={style.btnReserva}>make a reservation</button></Link>
              </div>
   
  
  
    </div>
   
   <SecondPart/>
   <div className={style.galeriaImagenes}>
    <h2>Choose the one you like the most
         And start pedaling!</h2>
    <button><Link href='/Galery'>See option</Link></button>
   </div>
   
   <ThirdPart/>
   <FourPart/>

   </Layout>
  )
}