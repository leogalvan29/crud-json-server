import React from 'react'

function Usuario({usuario}) {
    console.log(usuario)
  return (
    <div>
      <h1>{usuario.nombre}</h1> 
    </div>
  )
}

export default Usuario
