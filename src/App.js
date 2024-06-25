import './AppOutput.css';
import Menu from './Components/Menu';
import Nosotros from './Components/Nosotros';
import Instalaciones from './Components/Instalaciones';
import Opciones from './Components/Opciones';
import Contacto from './Components/Contacto';
import { useState } from 'react';


const Container = ({menuActivo}) => {
  return (
    <div>
      Contenido de {menuActivo}
    </div>
  )
}

function App() {  
  const [menuActivo, setMenuActivo] = useState ('Home');
  return (
    <div className="App">
      <header className="Menu">

        <Menu className= "Menu-header" menuActivo={menuActivo} setMenuActivo= {setMenuActivo}/>
        <Container menuActivo = {menuActivo}/>
        

      </header>

      <body>
       <Nosotros/> 
       <Instalaciones/>
       <Opciones/>
       <Contacto/>
       
      </body>

    </div>
  );
}

export default App;
