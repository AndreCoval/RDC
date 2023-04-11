import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import  logo  from "../assets/RDClogo.svg"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center text-xl font-notoSans font-medium text-center h-24 max-w-full mx-auto px-4 bg-[#E1E2E3] text-[#27282B]'>
        <div className=' w-20 h-28 md:w-[120px] md:h-[130px] -mt-4 md:mt-8 bg-[#091E38] absolute'>
            <img className='w-full h-full text-3xl align-middle font-bold text-white' src={logo} alt="/"/>
        </div>
        <ul className='hidden md:flex w-full justify-center'>
            <li className='p-4 hover:animate-jump animate-once animate-ease-in'>Empresa</li>
            <li className='p-4 hover:animate-jump animate-once animate-ease-in'>Serviços</li>
            <li className='p-4 hover:animate-jump animate-once animate-ease-in'>Projetos</li>
        </ul>
        <div onClick={handleNav} className=' ml-auto mr-2 md:hidden'>
            {nav ? <AiOutlineClose size={20} color='#27282B' className='relative'/> : <AiOutlineMenu size={20} color='#27282B' className='relative' /> }
        </div>
        <div className={nav ? 'fixed z-30 left-0 w-[60%] top-24 border-r bg-[#E1E2E3] animate-fade-right animate-once animate-duration-1000 animate-ease-in-out' : 'fixed left-[-100%]'}>
            <ul className='mt-4 uppercase text-base'>
            <li className='p-4 border border-b-gray-700'>Empresa</li>
            <li className='p-4 border border-b-gray-700'>Serviços</li>
            <li className='p-4 border border-b-gray-700'>Projetos</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar