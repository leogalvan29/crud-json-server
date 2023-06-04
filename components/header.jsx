import React from 'react'
import Image from 'next/image'
import logoRick from '../public/logorick.png'
import Link from 'next/link'

function Header() {
  return (
    <div className='w-full h-12 bg-gray-100 py-10 flex flex-row justify-around items-center'>
      <Image src={logoRick} width={120} height={60} alt="logo"/>
      <nav className="navegacion">
         <Link href="/" className='text-slate-950 font-bold m-5'>Home</Link>
         <Link href="/docs" className='text-slate-950 font-bold m-5'>Docs</Link>
         <Link href="/about" className='text-slate-950 font-bold m-5'>About</Link>
         <Link href="/register" className='text-slate-950 font-bold m-5'>Registrarse</Link>
         <Link href="/loguin" className='text-slate-950 font-bold m-5'>Ingresar</Link>
      </nav>
    </div>
  ) 
}

export default Header
