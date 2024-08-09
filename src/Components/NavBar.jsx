import { useRef} from "react";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";



function NavBar () {
    const navRef = useRef();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Se elimina el token del localStorage para cerrar sesion
        localStorage.removeItem('token'); 
        navigate('/login');
    };

  return (
    <div className="navbar bg-lime-950 flex justify-between">
        <header className="flex">
            <img src= {logo} alt="logo" className="size-10 ml-4 px-1 py-1"/>
            <nav ref={navRef}> 
                <ul className=" bg-lime-950 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm: text-4 sm:items-center text-gray-200 my-2">
                    
                    <Link to="/Nosotros">Nosotros</Link>
                    <Link to="/Instalaciones">Instalaciones</Link>
                    <Link to="/Opciones">Opciones</Link>
                    <Link to="/Contacto">Contacto</Link>
                    
                </ul>

            </nav>
            

        </header>
        <button 
            onClick={handleLogout} 
            className="text-lime-950 hover:bg-lime-950  hover:text-white mr-3 bg-white font-bold rounded-md p-2 my-2">
                Logout
        </button>
    </div>
  )
}

export default NavBar

 
