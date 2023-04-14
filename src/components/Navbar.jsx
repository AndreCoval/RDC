import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import  logo  from "../assets/RDClogo.svg"
import { Link } from "react-router-dom";
import RDCIcon from '../assets/logo_blue.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center text-xl font-notoSans font-medium text-center h-24 max-w-full mx-auto px-4 bg-[#E1E2E3] text-[#27282B]'>
        <div className=' z-10 w-20 h-28 md:w-[120px] md:h-[130px] -mt-4 md:mt-8 bg-[#091E38] absolute'>
            <Link to="/"><img className='w-full h-full text-3xl align-middle font-bold text-white' src={logo} alt="/"/></Link>
            
        </div>
        <ul className='hidden md:flex w-full justify-center z-10'>
            <li className='p-4 uppercase hover:animate-jump animate-once animate-ease-in'><Link to="/whoweare">Empresa</Link></li>
            <li className='p-4 uppercase hover:animate-jump animate-once animate-ease-in'><Link to="/services">Serviços</Link></li>
            <li className='p-4 uppercase hover:animate-jump animate-once animate-ease-in'><Link to="/projects">Projetos</Link></li>
        </ul>
        <div onClick={handleNav} className=' ml-auto mr-2 md:hidden'>
            {nav ? <AiOutlineClose size={20} color='#27282B' className='relative'/> : <AiOutlineMenu size={20} color='#27282B' className='relative' /> }
        </div>
        <div className={nav ? 'fixed z-50 right-0 w-[40%] h-screen top-0 border-r bg-white animate-fade-left animate-once animate-duration-1000 animate-ease-in-out' : 'fixed right-[-100%]'}>
        <AiOutlineClose onClick={handleNav} size={20} color='#27282B' className=' my-8 h-6 ml-auto mr-3'/>
            <ul className='mt-[250px]  mb-4 uppercase text-base text-right flex flex-col'>
                <li className=' p-4 uppercase'><Link to="/whoweare" onClick={handleNav}>Empresa</Link></li>
                <li className=' p-4 uppercase'><Link to="/services" onClick={handleNav}>Serviços</Link></li>
                <li className=' p-4 uppercase'><Link to="/projects" onClick={handleNav}>Projetos</Link></li>
            </ul>
            <div className='pt-[100%]'>
                <img className='w-12 mx-auto py-2' src={RDCIcon} alt="/" />
                <h1 className='font-normal py-4 text-xs'>© RDC - metalomecânica/inox </h1>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar