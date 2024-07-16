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
          <p className='mt-8'> Desde 1997 nos dedicamos a resguardar este espacio, hogar de aves y varias especies de mamiferos. El predio tiene una extensión de 3HA, con una pequeña zona boscosa de fácil acceso. <br/> 
          <br/>
          Abrimos las puertas al público en diciembre del 2020. Desde ese momento trabajamos brindado experiencias amenas a personas que buscan estar en contacto con la naturaleza, disfrutando de todas las comodidades que ofrecemos. <br/>
          <br/>
          <i>Nos lo tomamos con calma</i></p>
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
