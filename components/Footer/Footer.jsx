import style from './footer.module.css'
import instagram from '../../public/assets/img/instagram.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={style.footer}>
        <h2>Brc Mountain Bike Rental - Mendoza </h2>
        <div className={style.contenedorInfo}>
        <div className={style.ig}>
          <Link href="https://www.instagram.com/bcr_mountainbikerental/"><Image src={instagram} alt="instagram" width={50} height={50}/></Link>
           <h3>bcr_mountainbikerental</h3>
        </div>
        <div className={style.ig}>
        <Link href="https://www.instagram.com/growingup_mdz/"><Image src={instagram} alt="instagram" width={50} height={50}/></Link>
           <h3>growingup_mdz/</h3>
        </div>
        </div>
        <h4>Site designed by <Link href="https://martinsetaro.netlify.app/"><span>Martin Setaro &copy; 2022</span></Link> for Bcr Mountain Rental Mendoza</h4>
    </div>
  )
}

export default Footer