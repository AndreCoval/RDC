import React from 'react'
import pic1 from "../assets/padrao-geo-formulario.png";

function Contactform() {

    return (
        <div className='text-white font-notoSans flex flex-col pt-5 -mb-8 sm:-mb-24 md:pt-16'>
        <h1 className='absolute w-full text-center pt-20 text-6xl sm:text-8xl sm:w-[500px] md:ml-[2%] leading-[48px] sm:leading-[60px] font-semiBold z-10'>entre em contacto connosco</h1>
        <div className="skew-y-[5deg] w-full h-[400px] bg-[#091E38]"></div>

        <div className='w-full bg-[#091E38] -top-8 sm:-top-24 pt-0 sm:pt-24 text-center content-center justify-center relative'>
        
        <img className=' left-0 bottom-0 opacity-5 w-full h-[500px] md:h-[800px] md:w-[80%] absolute z-10' src={pic1} alt="/" />
            
            <form className='w-full xl:w-[65%] md:mr-8 md:ml-auto sm:pl-8 grid md:grid-cols-2 gap-16' action="/" method="post">
            <h3 class="specialtext" className='font-medium text-4xl sm:text-5xl md:text-left md:col-span-2 -mt-4'>tem um projeto?</h3>
            <div className='mx-14 sm:m-0  flex flex-col'>
                <label className=' text-start text-2xl ty-8 uppercase text-medium' htmlFor="">nome</label>
                <input className='z-20 text-light text-[#809FC6] mt-4 bg-transparent border-b-2 border-[#809FC6]' type="text" name="name" id="name" placeholder='' />
            </div>
            <div className='mx-14 sm:m-0  flex flex-col'>
                <label className=' text-start text-2xl ty-8 uppercase text-medium' htmlFor="">empresa</label>
                <input className='z-20 text-light text-[#809FC6] mt-4 bg-transparent border-b-2 border-[#809FC6]' type="text" name="name" id="name" placeholder='' />
            </div>
            <div className='mx-14 sm:m-0  flex flex-col'>
                <label className=' text-start text-2xl ty-8 uppercase text-medium' htmlFor="">email</label>
                <input className='z-20 text-light text-[#809FC6] mt-4 bg-transparent border-b-2 border-[#809FC6]' type="text" name="name" id="name" placeholder='' />
            </div>
            <div className='mx-14 sm:m-0  flex flex-col'>
                <label className=' text-start text-2xl ty-8 uppercase text-medium' htmlFor="">telemóvel</label>
                <input className='z-20 text-light text-[#809FC6] mt-4 bg-transparent border-b-2 border-[#809FC6]' type="text" name="name" id="name" placeholder='' />
            </div>
            <div className='mx-14 sm:m-0 flex flex-col sm:col-span-2 sm:max-w-3xl'>
                <label className=' text-start text-2xl ty-8 uppercase text-medium' htmlFor="">mensagem</label>
                <textarea className='z-20 text-light mt-4' name="mensagem" id="mensagem" variant="standard" cols="1" rows="3"></textarea>
            </div>
            <button className='z-20 bg-[#115CC9] mx-auto sm:mx-0 w-60 md:w-96 text-xl md:text-3xl font-notoSans font-bold mb-24 py-1 text-white hover:animate-pulse animate-once animate-ease-in'>submeter</button>
            
            </form>
        
        </div>
    </div>
  )
}

export default Contactform