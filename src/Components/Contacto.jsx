import React from 'react';
import IMG_5424 from '../Assets/IMG_5424.JPG';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import NavBar from './NavBar';

const Contacto = () => {
  return (
    <div>
    <NavBar/>
      <div className='relative w-full h-full'> 
          <img src={IMG_5424} alt='fondo' className='w-full h-full object-cover'/>     
          <div className='bg-black opacity-30 absolute top-0 left-0 w-full h-full'/>
          <div className='absolute top-0 w-full h-full flex flex-col justify-center'> 
            <h2 className='text-white text-4xl px-10'>Te esperamos!</h2>
            <p className='text-white italic px-10 py-4'> Direccion <br/>
              Tacuryty, Villeta - Paraguay</p>
            <div className='flex gap-2 justify-items-start px-10 text-white'>
              <FaInstagram size={20}/>
              <FaWhatsapp size={20}/>
            </div>
              
          </div>   
      </div>
  </div>
                  
    
  )
}

export default Contacto
