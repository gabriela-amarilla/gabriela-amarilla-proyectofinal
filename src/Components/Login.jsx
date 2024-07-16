import React, { useState } from 'react'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <div id='container' className='h-screen flex justify-end items-center '>

      <div className='bg-white mx-4 p-8 rounded shadow-md w-[100vh]'>

        <h3 className='text-3xl font-bold mb-8 '>Login</h3>
    
          <form onSubmit={handleLogin} className='flex flex-col w-auto '>
          
          <div className='mb-4'>
               <label for="email" className='block font-semibold text-gray-700 mb-2'>Dirección de Correo</label>
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
              <label for="password" className='block font-semibold text-gray-700 mb-2'>Contraseña</label>
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
              type='sumbit' 
              value="Iniciar Sesión" 
              />
            </div>
            
          </form>
        </div> 
    </div>
  )
}

export default Login


  
