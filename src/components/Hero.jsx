import React from 'react'
import Typed from 'react-typed';
import pic4 from '../assets/hero-banner-home.jpg'
import geometric from '../assets/padrao-geo-hero-banner.png'

const Hero = () => {
  return (
    <div className=' text-white pt-8 md:pt-14 bg-[#E1E2E3] w-full h-[700px] sm:h-[800px] '>
    {/* <img className='w-full h-[1400px] opacity-5 object-cover -translate-y-[300px] sm:-translate-y-[150px]  absolute z-20' src={geometric} alt="/" /> */}
      <a className='z-20 bg-black/10 w-[80%] left-[10%] h-[600px] sm:h-[800px] absolute animate-fade animate-once'></a>
      <img className=' z-10 w-full h-[600px] sm:h-[800px] px-5 sm:px-28 object-cover object-center absolute animate-fade animate-once' src={pic4} alt="/" />
        <div className=' z-30 h-[800px] text-center flex flex-col content-center justify-center relative
        animate-fade-down animate-once animate-delay-500'>
            <p className='md:text-3xl sm:text-lg text-xs font-notoSans uppercase font-regular'>Serralharia, Metalomecânica de Precisão</p>
            <h1 className=' text-[110px] sm:text-[160px] md:text-[280px] leading-3 mt-10 sm:mt-16 md:mt-28 font-mulish font-extra-black'>RDC</h1>
            {/* <div className='flex justify-center intems-center '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Serviço de </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 py-4' strings={['Qualidade', 'Precisão', 'Confiança', 'Excelência']} typeSpeed={60} backSpeed={40} loop></Typed>
              </div> */}
            {/* <button className='bg-[#124270] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Serviços</button> */}
        </div>
        <div className="skew-y-[5deg] flex flex-col -mt-[200px] w-full z-0 h-[150px] sm:h-[400px] bg-[#E1E2E3]"></div>
    </div>
  )
}

export default Hero