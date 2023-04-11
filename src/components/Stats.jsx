import React from 'react'
const stats = [
    {
        id: "stats-1",
        title: "anos de experiência",
        value: "+30"
    },
    {
        id: "stats-2",
        title: "projetos",
        value: "+572"
    },
    {
        id: "stats-3",
        title: "empenho",
        value: "100%"
    },
]

function Stats() {
    return(
    <section className="flex flex-center flex-row flex-wrap mt-[-50px] px sm:mb-20 mb-6">
    {stats.map((stat) => (
        <div key={stat.id} className="flex-1 px-3 pt-12 pb-[60px] justify-center items-center  flex-row m-3 rounded-lg bg-[#124270]" >
            <h4 className=' font-sans text-center xs:text-[30px] text-[26px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
            <p className='font-sans text-center xs:text-[12px] text-[14px] xs:leading-[26px] leading-[20px] text-[#84ABD2] uppercase ml-3'>{stat.title}</p>
        </div>
    ))}
    </section>)
}

export default Stats