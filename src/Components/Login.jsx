import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin =  (e) => {
    console.log("Login the user")
    e.preventDefault();
    const requestOptions = {
      method: "post",
      url: "http://localhost:3001/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(requestOptions)
    .then((result) => {
        console.log(result);
        console.log(result.status)
        localStorage.setItem('token', result.data.token);
        
        if (result.status !== 200){
          setError(true)}
        else {
          props.setToken(true);
          navigate('/Nosotros')}
    })
    .catch((error) => {
      error = new Error();
    })
    
  }
    return (
    
      <div id='container' className='h-screen flex justify-center items-center bg-lime-950 '>       
              <div className='bg-white mt-4 mx-4 p-8 rounded shadow-md w-[50vh] h-auto text-center'>
                <h3 className='text-3xl font-bold mb-8 '>Login</h3>
            
                  <form onSubmit={handleLogin} className='flex flex-col w-auto object-cover'>
                  
                  <div className='mb-4'>
                      <label htmlFor="email" className='block font-semibold text-gray-700 mb-2'>Dirección de Correo</label>
                      <input 
                      className='border rounded w-auto py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline'
                      type="email" 
                      name="email" 
                      placeholder='Ingresar Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      />
                    </div>
  
                    <div>
                      <label htmlFor="password" className='block font-semibold text-gray-700 mb-2'>Contraseña</label>
                      <input 
                      className='border rounded w-auto py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline'
                      
                      type='password'  
                      placeholder='Ingresar contra'
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                      required
                      />
                    </div>
  
  
                    <div className='mb-6 mt-3'>
                      <input 
                      className='bg-lime-900 hover:bg-lime-950 text-white font-bold py-2 px-4 rounded'
                      type='submit' 
                      value="Iniciar Sesión" 
                      onClick={(e)=> handleLogin(e)}
                      />
                    </div>
                    <p>No estas registrado?</p>

                  </form>

                  <Link to="/" className='text-lime-900 hover:font-extrabold'>Registrarse</Link>
                    {/* <input 
                    className='bg-lime-900 hover:bg-lime-950 text-white font-bold py-2 px-4 rounded'
                    type='submit' 
                    value="Registrarse" 
                    onClick={()=> navigate('/')}
                    /> */}
              </div> 
            
      </div>
    )  
  };

export default Login


  
