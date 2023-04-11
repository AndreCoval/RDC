import React from 'react'

function Whoweare() {
  return (
    <div className='w-full bg-gray py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <p className='text-[#124270] font-bold uppercase p-2'>os nossos serviços</p>
                <p>Asseguramos a máxima qualidade e o rigor absoluto nos nossos projetos. 
                Garantimos um serviço de excelência e aconselhamos a melhor solução para o desenvolvimento da sua ideia. 
                Atendimento rápido e personalizado, capacidade de resposta e orçamentação correta e eficaz, uma boa relação qualidade/preço. 
                Temos ligações aos sectores Automóvel, Aeronáutico, Têxtil, Alimentar, Robótica e na Área de Manutenção Industrial, 
                entre as mais diversas indústrias e os mais variados clientes. 
                </p>
                <button className='bg-[#124270] text-[white] w-[200px] uppercase rounded-md font-medium my-6 mx-auto py-3 '>ver mais</button>
            </div>
        </div>
    </div>
  )
}

export default Whoweare