import { useRef } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";



function NavBar () {
    const navRef = useRef();
  return (
    <div className="navbar bg-lime-950 flex">
        <header className="flex">
            <img src= {logo} alt="logo" className="size-10 ml-4 px-1 py-1"/>
            <nav ref={navRef}> 
                <ul className=" bg-lime-950 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm: text-4 sm:items-center text-gray-200 ">
                    
                    <Link to="/Nosotros">Nosotros</Link>
                    <Link to="/Instalaciones">Instalaciones</Link>
                    <Link to="/Opciones">Opciones</Link>
                    <Link to="/Contacto">Contacto</Link>

                </ul>

            </nav>

        </header>

    </div>
  )
}

export default NavBar

 
