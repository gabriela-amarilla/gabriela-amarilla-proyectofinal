
import React, { useState, useContext, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Instalaciones from './Components/Instalaciones';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import './index.css';
import Opciones from './Components/Opciones';
import Singup from './Components/Singup';
import Login from './Components/Login';
import {AuthContext, AuthProvider} from './Context/AuthContext';



function App() {  
  const [auth, setAuth] = useContext(AuthContext);
  const [token, setToken] = useState(false);

  useEffect(() => {
    // Verificacion de existencia previa del token
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(true);
    }
  }, []);

    //Se establecen las rutas autorizadas segun verificación de token
      //De no existir el token se accede a la pg Login

  return (
    <div className='App'>
      <AuthProvider value={{ auth, setAuth }}>
        
          {token ? (
            <Routes>
              <Route path='/' element={<Singup />} />
              <Route path='/login' element={<Login setToken={setToken} />} />
              <Route path='/Nosotros' element={<Nosotros />} />
              <Route path='/Instalaciones' element={<Instalaciones />} />
              <Route path='/Opciones' element={<Opciones />} />
              <Route path='/Contacto' element={<Contacto />} />
            </Routes>
          ) : (
            <Routes>
              <Route path='/login' element={<Login setToken={setToken} />} />
              <Route path='/' element={<Singup />} />
            </Routes>
            
          )}
        
      </AuthProvider>
    </div>
  );
}


export default App;
