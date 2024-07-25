
import React, { useState, useEffect, useContext} from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import Instalaciones from './Components/Instalaciones';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import './index.css';
import Opciones from './Components/Opciones';
import NavBar from './Components/NavBar';
import Singup from './Components/Singup';
import Login from './Components/Login';


 



function App() {  

  

  return (
    <div className='App'>
     
       
          <Routes>
            <Route path='/' element={<Singup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Menu' element={<Menu/>}/>
            <Route path='/Nosotros' element={<Nosotros/>}/>
            <Route path='/Instalaciones' element={<Instalaciones/>}/>
            <Route path='/Opciones' element={<Opciones/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
          </Routes>
        
      
     

  
  </div>
);
} 

export default App;
