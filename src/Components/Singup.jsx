import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSingup = (e) => {
    e.preventDefault();
    axios.post ("http://localhost:3001/register", {name, email, password})
    .then(result=> {
      console.log(result);
      navigate("/login");
    })
    .catch(err => console.log(err))
   
  }


  return (

    
    <div id='container' className='h-screen flex justify-center items-center bg-lime-950'>       
            <div className='bg-white mt-4 mx-4 p-8 rounded shadow-md w-[50vh] h-auto text-center object-contain'>
              <h3 className='text-3xl font-bold mb-8 '>SingUp</h3>
          
                <form onSubmit={handleSingup} className='flex flex-col w-auto object-cover'>

                <div className='mb-4'>
                    <label htmlFor="email" className='block font-semibold text-gray-700 mb-2'>Nombre</label>
                    <input 
                    className='border rounded w-auto py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline'
                    type="text" 
                    name="name" 
                    placeholder='Ingresar Nombre Completo'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                  </div>

                
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
                    value="Registrarse" 
                    onClick={(e)=> handleSingup(e)}
                    />
                  </div>
                </form>
                <p>Ya tenes una cuenta?</p>
                <Link to="/login" className='text-lime-900 hover:font-extrabold'>Login</Link>
                
            </div> 
          
    </div>
  )
}
 
export default Singup
