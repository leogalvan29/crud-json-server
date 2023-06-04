import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Layout from '@/components/layout'
import Usuario from '@/components/usuario'




function Panel(datos) {

  
   console.log(datos)
  return (
    <Layout>
        {datos.datos.map((usuario) => (
            <Usuario 
            key={usuario.id}
            usuario={usuario}
            >
                
            </Usuario> 
        ))}
    </Layout>  
  )
} 

export default Panel

export async function getServerSideProps(context){
      const data = await fetch('http://localhost:3004/usuarios')
      const datos = await data.json()
      return{
        props:{
            datos
        }
      }
}
