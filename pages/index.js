import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { initFirebase } from './firebase'
import { useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { async } from '@firebase/util'
import Card from '@/components/card'


const inter = Inter({ subsets: ['latin'] })

export default function Home({datos}) {
  const {dato, loguin,setLoguin, datosLoguin} = useContext(AuthContext)

//  const [password, setPassword] = useState('') 
//  const [email,setEmail] = useState('')
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if([password,email].includes('')){
//       console.log('todos los datos son obligatorios')
//     } else {
//       try {
//         await datosLoguin(email, password)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   }
 
  
//   console.log(datos)
  return (
     
     <Layout>
      {/* {loguin === true ? (<h1>Dentro de la app</h1>) : ( <div className='bg-blue-500'>
        <h1>ingresa con tu usuario</h1>
       <form onSubmit={handleSubmit}>
        <div className='dato'>
          <label>email</label>
          <input type="email" name="nombre" onChange={(e) => setPassword(e.target.value) }/>

        </div>
        <div className='dato'>
          <label>password</label>
          <input type="password" name="password" onChange={(e) => setEmail(e.target.value)}/>

        </div>
        <button type="submit">Enviar</button>
       </form>
      </div>)} */}
        <h1 className='text-center py-10 text-3xl md:text-6xl font-bold'>Rick and Morty API</h1>
      <div className="h-[1200] py-10 flex flex-wrap justify-center mx-auto w-[90%] md:max-w-[1140px] gap-1">

      {datos.results.map((character) => (
        <Card 
         key={character.id}
         character={character}
        />
      
     ))}

      </div>
     
    
       
     </Layout>

     
  )
}

export async function getServerSideProps(context) {
   const data = await fetch('https://rickandmortyapi.com/api/character')
   const datos = await data.json()
  return {
    props: {
      datos
    }, // will be passed to the page component as props
  };
}