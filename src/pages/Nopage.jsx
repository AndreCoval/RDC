import React from 'react'
import logo from "../assets/logo_blue.svg"
import { Link } from "react-router-dom";

function Nopage() {
  return (
    <div className='w-full h-screen p-20 font-notoSans'>
        <h1 className=' font-bold text-5xl text-[#115CC9]'>Página Não encontrada</h1>
        <p className='text-[#091E38] text-lg mx-2  mt-5'>Por favor tente mais tarde, ou clique no logotipo para regressar á Página Principal</p>
        
        <Link to="/"><img src={logo} alt="/" className='w-80 mx-auto mt-36' /></Link>
    </div>
  )
}

export default Nopage