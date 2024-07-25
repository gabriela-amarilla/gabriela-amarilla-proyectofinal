import React from 'react';
import reposera from "../Assets/reposera.JPG";
import noche2 from "../Assets/noche2.jpg";
import entrada from "../Assets/entrada.JPG";
import NavBar from './NavBar';


const Opciones = () => {
  return (
    <div>
      <NavBar/>
    
    <div className='max-w-[1400px] m-auto py-16 px-4 grid '>
        <div className='h-full p-4'>
          <h2 className='text-5xl md:text-6xl'>Opciones</h2>

            <div className='mt-8 grid grid-cols-3'>
              <div className='relative'> 
              
                  <img className = 'w-full h-full p-2 object-cover' src={reposera} alt='reposera'/>
                        <div className='fade-in-text'>
                          <div className='text text-white'> 

                            <p className='text-center'>
                              <p className='font-extrabold'>15 Personas</p>
                              <p className='text-sm'><i>Check-in:</i> 9am | <i>Check-out:</i> 5pm </p>
                              <br/>
                              Acceso exclusivo al espacio recreativo y uso del quincho principal.
                              </p>
                          </div>
                        </div>
                    <p className='px-4 font-bold'>Pasar el dia</p>

              </div>

              <div className='relative'>  
                <img className = 'w-full h-full p-2 object-cover' src={noche2} alt='noche'/>
                <div className='fade-in-text'>
                          <div className='text text-white'> 

                            <p className='text-center'>
                              <p className='font-extrabold'>20 Personas</p>
                              <p className='text-sm'><i>Check-in:</i> 3pm | <i>Check-out:</i> 5pm </p>
                              <br/>
                              Acceso exclusivo al espacio recreativo y a la casa principal. <br/>
                              Posibilidad de recibir visitas para que pasen el día.
                              </p>
                          </div>
                        </div>
                    <p className='px-4 font-bold'>Pasar la noche</p> 
              </div>


              <div className='relative'>
                <img className = 'w-full h-full p-2 object-cover' src={entrada} alt='entrada'/>

                <div className='fade-in-text'>
                          <div className='text text-white'> 

                            <p className='text-center'>
                              <p className='font-extrabold'>100 Personas</p>
                              <p className='text-sm'><i>Check-in:</i> 6am | <i>Check-out:</i> 9pm </p>
                              <br/>
                              Acceso un día antes del evento para montaje <br/>
                              Se incluye una noche de estadía para 20 personas.
                              </p>
                          </div>
                        </div>
                    <p className='px-4 font-bold'>Eventos</p>  
              </div>
          </div>          
        </div>

        

    </div>
    </div>
  )
}

export default Opciones
