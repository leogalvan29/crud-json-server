import React, { useContext, useState } from 'react'
import Layout from '@/components/layout'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'





function Loguin() { 
  const {loguinUsuario, error , setError} = useContext(AuthContext)
  const [correo, setCorreo] = useState('')
  const [password,setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    

    e.preventDefault()
     console.log('ingresando...')
     if([correo,password].includes('')){
       console.log('todos los campos son obligatorios')
       setError(true)
     } else {
      const values = {
        correo:correo,
        password:password
       }
      setError(false)
       loguinUsuario(values)
       
      
       
     }

     
     

     
   

     
  }
  return (
    <Layout>
      {error && (<h1 className='bg-red-600 p-3 text-white'>Todos los campos son obligatorios</h1>)}
      <form onSubmit={handleSubmit}>
        <div className="dato">
          <label htmlFor="correo">Correo</label>
          <input type="email" 
          onChange={(e) => setCorreo(e.target.value)}
          value={correo}
          />
        </div>
        <div className="dato">
          <label htmlFor="">password</label>
          <input type="password"
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
          />

        </div>
        <button type='submit'>Enviar</button>

      </form>
    </Layout>
  )
}

export default Loguin
