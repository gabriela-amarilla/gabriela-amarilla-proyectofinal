import React from 'react';
import hamaca from "../Assets/hamaca.jpg";
import entrada from "../Assets/entrada.JPG";
import casitaarbol from "../Assets/casitaarbol.JPG";
import patio from "../Assets/patio.JPG";



function Nosotros (){
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

        <div className='flex flex-col h-full p-4'>
          <h2 className='text-5xl md:text-6xl'>Nosotros</h2>
          <p className='mt-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam, sequi eveniet id dolor corporis numquam sapiente quae earum aut quasi repellendus sint, error tenetur odio ducimus laborum impedit tempore.</p>
        </div>

        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className=' row-span-4 object-cover w-full h-full p-2' src={patio} alt='patio' />
            <img className='row-span-3 object-cover w-full h-full p-2'src={entrada} alt='entrada' />
            <img className='row-span-3 object-cover w-full h-full p-2'src={casitaarbol} alt='casita' />
            <img className='row-span-3 object-cover w-full h-full p-2'src={hamaca} alt='hamaca' />
        </div>

    </div>
  )
}

export default Nosotros
