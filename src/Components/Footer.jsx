import React from 'react'
import imagen from "../../src/images/DH.png"
import facebook from "../../src/images/ico-facebook.png"
import instagram from "../../src/images/ico-instagram.png"
import wp from "../../src/images/ico-whatsapp.png"
import tiktok from "../../src/images/ico-tiktok.png"

const Footer = () => {
  return (
    <footer >
      <div className='rojo'>
        <span>VOLVER AL COMIENZO</span>
      </div>
      <div className='footerAbajo'>
        <div className='powered'>
          <img src={imagen} />
        </div>
        
      <div className='icons'>
        <img src={facebook}/>
        <img src={instagram}/>
        <img src={wp}/>
        <img src={tiktok}/>
      </div>
      </div>
    </footer>
  )
}

export default Footer
