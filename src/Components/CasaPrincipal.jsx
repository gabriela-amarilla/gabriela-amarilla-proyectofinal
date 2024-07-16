import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid grid-cols-2'>
      <div>
        <h2 className='text-4xl'>Casa principal</h2>
        <p>
            <h3>En Planta Baja</h3>
            Una habitación matrimonial con baño privado<br/>
            Una habitación matrimonial<br/>
            Una habitación doble <br/>
            Una habitación con 2 literas y una cama single <br/>
            1 baño social y 2 baños con ducha<br/>
            Cocina/Comedor/Living<br/>

            <h3>En Segundo Piso </h3>
              Dos habitaciónes matrimoniales. <br/>
              Litera con dos camas (en sala) <br/>
              Una cama single (en sala) <br/>
              1 baño con ducha <br/>
              Espacio con TV (No contamos con señal de cable) <br/>

        </p>
      </div>

      <div>
        <p>Galeria imagenes</p>

      </div>

    </div>
  )
}

export default Home
