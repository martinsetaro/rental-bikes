
import style from '../Header/header.module.css';
import Image from 'next/image';
import logo from '../../public/assets/img/logoOriginal.png'
import clock from '../../public/assets/img/reloj2.png'

const Header = () => {





  return (
    <div className={style.header}>
      <div className={style.contenedorNav}>
        <div className={style.logo}>
          <Image src={logo} alt="rental bike" width={200} height={200}/>
        </div>
        <div className={style.navegador}>
          <div>
            <Image src={clock} alt="horarios" width={60} height={60}/>
          </div>
          <div className={style.horarios}>
            <h3 className={style.texto}>Open 24 hrs</h3>
            <h4 className={style.subTexto}>The 365 days of the years </h4>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Header