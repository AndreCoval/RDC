import React from "react";
import banner from "../assets/Imagens stock/projetos-banner.jpeg";
import  list_projects  from "../data/list_projects";
import {TbBuildingFactory2} from "react-icons/tb"

function Projects() {
  /* console.log(list_projects); */
  return (
    <div className="text-white pt-8 md:pt-14 my-auto font-notoSans w-full h-full">
      <div className="absolute skew-y-[5deg] z-0 -mt-14 sm:-mt-24 lg:-mt-40 w-full h-[150px] sm:h-[400px] bg-[#E1E2E3]"></div>
      <div className="max-w-[1240px] mx-auto">
        {/* Hero Banner */}
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className="w-[90%] sm:w-[100%] mx-auto h-60
            sm:h-80 lg:h-[460px] font-notoSans text-center relative justify-end flex flex-col bg-cover bg-center"
        >
          {/* <img className="relative" src={banner} alt="/" /> */}
          <a className="absolute bg-black/60 w-full h-full"></a>
          <h2 className="font-normal text-xs sm:text-sm lg:text-base uppercase relative">
            projetos dos quais estamos orgulhosos
          </h2>
          <h5 className="w-full mb-10 text-5xl sm:text-8xl relative">
            projetos
          </h5>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-10 mx-6 lg:mx-0">
          {list_projects.map((item, index) => (
            <div key={index} className="mb-8">
              <img src={item.image} alt={item.name} className="w-full md:w-full h-[280px] md:h-[700px] object-cover object-center"/>
              <p className="text-black flex font-notoSans text-xs md:text-sm font-normal uppercase mt-4"><TbBuildingFactory2 color="#115CC9" size={20} className="mr-2 -translate-y-1"/>{item.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;
