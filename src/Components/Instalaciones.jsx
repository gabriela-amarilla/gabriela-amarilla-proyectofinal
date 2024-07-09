import React from 'react'
import casitaarbol from "../Assets/casitaarbol.JPG";


const Instalaciones = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

        <div className='flex flex-col h-full p-4'>
          <h2 className='text-5xl md:text-6xl'>Instalaciones</h2>
          <p className='mt-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam, sequi eveniet id dolor corporis numquam sapiente quae earum aut quasi repellendus sint, error tenetur odio ducimus laborum impedit tempore.</p>
        </div>

        <div className='grid grid-cols-3 grid-rows-2 h-[80vh]'>
          <img className=' w-full h-full p-2'src={casitaarbol} alt='casita' />
          <img className=' w-full h-full p-2'src={casitaarbol} alt='casita' />
          <img className=' w-full h-full p-2'src={casitaarbol} alt='casita' />

          <div>
              <h3 className='font-bold'>Casa Principal</h3>
              <p>Disfruta de todas las comodidades que te ofrecemos</p>
          </div>

          <div>
              <h3 className='font-bold'>Quincho Principal</h3>
              <p>Equipado con todo lo necesario para disfrutar de encuentros con amigos o reuniones de trabajo</p>
          </div>
          <div>
            <h3 className='font-bold'>Outdoors</h3>
            <p>Multiples espacios para disfrutar de la naturaleza y de los seres que en ella habitan</p>
          
          </div>
          
            
            
        </div>

    </div>
   
  )
}

export default Instalaciones
