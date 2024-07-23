import React, { useState, useContext } from 'react';
import axios from "axios";





const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
 

  const handleLogin = async (e) => {
    console.log("Login the user")
    e.preventDefault();
    // const configuration = {
    //   method: "post",
    //   url: "http://localhost:3001/login",
    //   data: {
    //     email, 
    //     password,
    //   },
    //   };
    //   axios.post('http://localhost:3001/login', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

      
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      };

      try {
        const response = await fetch(
          "http://localhost:3001/login",
          requestOptions
        );
        console.log("Ok");
        console.log(response.status);
        console.log(response)
        if (response.status) {
          
        }
      } catch (e) {
        console.log(e);
      }
    
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
                </form>
            </div> 
          
    </div>
  )
}

export default Login


  
