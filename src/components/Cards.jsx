import React from 'react'
import Cortelaser from '../assets/Imagens stock/home-corte_laser.jpeg'
import ManutencaoInd from '../assets/Imagens stock/home-manutencao-industrial.jpeg'
import Maquinacao from '../assets/Imagens stock/home-maquinacao.jpeg'
import Serralharia from '../assets/Imagens stock/home-serralharia.jpeg'

const Cards = () => {
  return (
    <div className='w-full sm:max-w-[1500px] mx-auto my-8 text-white font-notoSans'>
        <div className='w-full mx-auto sm:px-16 px-6 py-8 mb-34 gap-4 grid md:grid-cols-2'>
            <div className='w-full h-full grid gap-4'>
                <div className='group w-full h-[250px] md:h-[300px] relative'>
                    <a className='absolute w-full h-full bg-black/20'></a>
                    <img className='h-full w-full object-cover object-center' src={Serralharia} alt="/" />
                    <div className='absolute bottom-4 sm:group-hover:top-10 left-0 right-0 pl-8 py-2'>
                        <h2 className='text-2xl uppercase font-md transition animate-fade animate-once'>Serralharia Geral</h2>
                        <p className='w-[80%] md:w-[50%] my-2 text-xs md:text-sm font-regular sm:hidden group-hover:block  animate-fade-up animate-once'>Projetos variados, executados com ferramenta de precisão, 
                        técnicos formados e enorme sentido de responsabilidade e rigor. </p>
                    </div>
                </div>
                <div className='w-full h-[500px] lg:h-[400px] gap-4 grid md:grid-cols-2'>
                    <div className='group w-full h-full relative'>
                        <a className='absolute w-full h-full bg-black/30'></a>
                        <img className='h-full w-full object-cover object-center' src={Maquinacao} alt="/" />
                        <div className='absolute bottom-4 sm:group-hover:top-16 left-0 right-0 pl-4 py-2'>
                            <h2 className='text-2xl uppercase font-medium transition animate-fade animate-once'>Maquinação Convencional e CNC</h2>
                            <p className='w-[90%] my-2 text-xs md:text-sm font-regular sm:hidden group-hover:block animate-fade-up animate-once'>Análise do melhor processo para cada serviço. Dispomos de ótimos serviços 
                            e ótimos parceiros para puder fornecer a melhor qualidade ao cliente. </p>
                        </div>
                    </div>
                    <div className='group w-full h-full grid relative'>
                        <a className='absolute w-full h-full bg-black/50'></a>
                        <img className='h-full w-full  object-cover object-center' src={ManutencaoInd} alt="/" />
                        <div className='absolute bottom-4 sm:group-hover:top-16 left-0 right-0 pl-4 py-2'>
                            <h2 className='text-2xl uppercase font-medium transition animate-fade animate-once'>Manutenção Industrial</h2>
                            <p className='w-[90%] my-2 text-xs md:text-sm font-regular sm:hidden group-hover:block animate-fade-up animate-once'>Desempenho de tarefas para manutenção preventiva ou corretiva, 
                            em solo nacional ou internacional, com equipas altamente qualificadas.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='group sm:mt-0 translate-y-18 sm:translate-y-30 relative grid w-full h-[250px] sm:h-full'>
                <img className='h-full w-full absolute object-cover object-center' src={Cortelaser} alt="/" />
                <a className='absolute w-full h-full bg-black/40'></a>
                <div className='absolute bottom-4 sm:group-hover:top-10 left-0 right-0 sm:pl-8 pl-4 py-2'>
                    <h2 className='text-2xl uppercase font-medium transition animate-fade animate-once'>corte laser e quinagem</h2>
                    <h2 className='text-2xl uppercase font-medium transition animate-fade animate-once'>de alta precisão</h2>
                    <p className='w-[80%] md:w-[60%] my-2 text-xs md:text-sm font-regular sm:hidden group-hover:block animate-fade-up animate-once'>Utilização de vários tipos de materiais, permite a criação de 
                    projetos peculiares e de diferentes dimensões. Máquinas de alta qualidade e precisão.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cards