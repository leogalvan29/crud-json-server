import React, { useContext, useState } from 'react'
import Layout from '@/components/layout'
import Error from 'next/error'
import { AuthContext } from '../context/AuthContext'
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';


function Register() {
    const {error, setError,  registrarUsuario} = useContext(AuthContext)
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = (e) => {
      e.preventDefault();
       
       if([nombre,correo,password].includes('')){
        setError(true)
       } else {
           const valuesUser = {
             id:uuid(),
              nombre:nombre,
              correo:correo,
              password:password
           }

           

            registrarUsuario(valuesUser)
            setTimeout(()=> {
              router.push('/loguin')
            },2000)
          
           setNombre('')
           setCorreo('')
           setPassword('')
       }

       
       
    }

    console.log(error)
  return (
    <Layout>
      <h1 className='text-center text-4xl py-5'>Registro</h1> 
      <div className='flex flex-col justify-center items-center bg-white'>

      <form className='bg-gray-200 w-2/3 h-[600px] flex flex-col items-center justify-center' onSubmit={handleSubmit}> 
       {error && (<h1 className='bg-red-600 p-3 text-white'>Todos los campos son obligatorios</h1>)}
        <div className='dato flex flex-col justify-center items-center w-1/2 mx-auto'>
         <label className='text-2xl'>Nombre</label> 
         <input type="text" className="border-2 border-blue-500 w-full" value={nombre}
          onChange={(e) => setNombre(e.target.value)}
         />
        </div>
        <div className='dato flex flex-col justify-center items-center w-1/2 mx-auto'>
         <label className='text-2xl'>Correo</label> 
         <input type="email" className="border-2 border-blue-500 w-full" value={correo}
          onChange={(e) => setCorreo(e.target.value)}
         />
        </div>
        <div className='dato flex flex-col justify-center items-center w-1/2 mx-auto'>
         <label className='text-2xl'>Password</label> 
         <input type="password" className="border-2 border-blue-500 w-full" value={password}
         onChange={(e) =>  setPassword(e.target.value)}
         />
        </div>
        <button type="submit" className=' bg-blue-700 w-1/2 my-5 py-2 text-white uppercase'>Registrarse</button>

      </form>
        

      </div>
    
   
    </Layout>
  )  
}

export default Register
