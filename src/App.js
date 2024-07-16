
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Menu from './Components/Menu';
import Instalaciones from './Components/Instalaciones';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import './index.css';
import Opciones from './Components/Opciones';
import NavBar from './Components/NavBar';

import SingUp from './pages/SingUp';
import Login from './Components/Login';

 



function App() {  
  return (
    <>
      <NavBar/>
      
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/Instalaciones' element={<Instalaciones/>}/>
        <Route path='/Opciones' element={<Opciones/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>

  
  </>
);
}

export default App;
