import React from "react";
import principal from "../Assets/principal.jpg";


const Menu = () => { 
   
    return(
        <div className="w-full h-screen">
            
            <img src={principal} alt="fondo" className="top-0 left-0 w-full h-screen object-cover" />

            <div className="contenedor grid lg:grid-cols-2 ">

                <div id="c-izquierda" className="absolute top-0 w-full h-full flex flex-col justify-center text-white" >
                    <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">

                        <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl"> Quinta Panambi Hovy</h1>
                        <h2>Nos lo tomamos con calma</h2>
                        <button>Inicia sesión para ver más
                        </button>
                        <p> Si todavía no tenes una cuenta, registrate acá</p>
                    </div>
                </div>

            </div>
  
        </div>
    )
}


export default Menu;


