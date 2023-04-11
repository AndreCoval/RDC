import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 bg-[#124270] text-[white] px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Fica a par de todas as novidades</h1>
                <p>Inscreve-te para receber a nossa newsletter</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-[gray] ' type="email" placeholder='Insira o Email' />
                    <button className='bg-[white] text-[#124270] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Inscrever</button>
                </div>
                <p>Preocupamo-nos com a proteção dos seus dados. Leia a nossa <span className='text-[black] font-bold'>Politica de Privacidade</span> </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter