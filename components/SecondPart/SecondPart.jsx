
import React, { useEffect, useState } from 'react'
import style from './secondPart.module.css'
import traduccion from './traduccion.js'



const SecondPart = ({translation}) => {




  return (
    
    <div className={style.contenedorSecundario}>
      {translation ? <h2>{traduccion.tourPt}</h2> : <h2>{traduccion.tourEn}</h2>}
      {translation ? <p>{traduccion.textoUnoTourPt}</p> : <p>{traduccion.textoUnoTourEn}</p>}
      {translation ? <p>{traduccion.textoDosTourPt}</p> : <p>{traduccion.textoDosTourEn}</p>}
      
    </div>
  )
}

export default SecondPart