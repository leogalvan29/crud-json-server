import {createContext, useEffect, useState }from 'react'
import { GoogleAuthProvider } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth' 
import { signInWithPopup } from 'firebase/auth' 
import { auth } from '../pages/firebase.js'
import { async } from '@firebase/util'

export const AuthContext = createContext() 

const dato = 'dato'

function AuthProvider({children}) { 

    const [loguin,setLoguin] = useState(false)
    const [error, setError] = useState(false)
    const [loguinPanel, setLoguinPanel] = useState(false)
   

     async function registrarUsuario(valuesUser){

             try {
                const data = await fetch('http://localhost:3004/usuarios',{
                    method:'POST',
                    body:JSON.stringify(valuesUser),
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    
                 })
                console.log(data)
             } catch (error) {
                console.log(error)
             }  
            

    }

    async function loguinUsuario(values){
       console.log(values) 
       try {
          const data = await fetch('http://localhost:3004/usuarios')
          const datos = await data.json()
          console.log(datos) 
          const usuarioExiste = datos.filter(usuario => usuario.correo === values.correo && usuario.password === values.password)
          if(usuarioExiste.length > 0){
            console.log('si existe')
            setLoguinPanel(true)
          }else {
            console.log('no existe') 
            setLoguinPanel(false)
          }
          
       } catch (error) {
        console.log(error)
       }
    }


   

    // useEffect(() => {
    //      const usuarioNoLogueado = auth.onAuthStateChanged((user) => {
    //        setUsuario(user)
    //         setLoguin(false)
    //      })
    //      return () => {
    //         usuarioNoLogueado()
    //      }
    // },[]) 

    // const datosLoguin = (email, password) => {
    //     return auth.signInWithEmailAndPassword(email, password);
    // }

    // const logout = () => {
    //     return auth.signOut()
    // }

  

  return (
    <AuthContext.Provider value={{
        dato,
        loguin,
        setLoguin, 
        error,
        setError, 
        registrarUsuario,
        loguinUsuario,
        loguinPanel
       
       
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
