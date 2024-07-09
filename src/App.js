
import React from 'react';
import Menu from './Components/Menu';
import Instalaciones from './Components/Instalaciones';
import Nosotros from './Components/Nosotros'
import './index.css';
import Opciones from './Components/Opciones';




function App() {  
  return (
    <div>
      <Menu/>
      <Nosotros/>
      <Instalaciones/>
      <Opciones/>
    </div>

  );
}

export default App;
