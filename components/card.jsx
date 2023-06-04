import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Card({character}) {
    const imagen = character.image
 
  return (
    <>
        <Link href={`/card/${character.id}`} className=" sm:w-1/2 md:w-1/3 w-5/6 flex flex-row shadow-md" >
            <Image loader={() => imagen} src={imagen} width={200} height={300} alt={character.name}/>
            <div className='contenido-card'>
            <p className='text-zinc-900 font-bold'>{character.name}</p>
            <p className={`${character.status === 'Alive' ? 'text-lime-500' : 'text-red-500'}`}>{character.status}</p>
            </div>
           
        </Link>
    </> 
  )
}

export default Card
