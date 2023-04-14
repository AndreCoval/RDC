import React from "react";
import working from "../assets/Imagens stock/quem_somos-empresadinamica.jpeg";
import banner from "../assets/Imagens stock/quem_somos-banner.jpeg";

function Whoweare() {
  return (
    <div className="text-white pt-8 md:pt-14 my-auto w-full h-full">
      <div className="absolute skew-y-[5deg] z-0 -mt-14 sm:-mt-24 lg:-mt-40 w-full h-[150px] sm:h-[400px] bg-[#E1E2E3]"></div>

      <div className="max-w-[1240px] mx-auto">
        <div>
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="w-[90%] mx-auto h-60
                sm:h-80 lg:h-[460px] font-notoSans text-center relative justify-end flex flex-col bg-cover bg-center"
          >
            {/* <img className="relative" src={banner} alt="/" /> */}
            <a className="absolute bg-black/60 w-full h-full"></a>
            <h2 className="font-normal text-xs sm:text-sm lg:text-base uppercase relative">
              sobre a rdc
            </h2>
            <h5 className="w-full mb-10 text-5xl sm:text-8xl relative">
              quem somos
            </h5>
          </div>
        </div>

        <div className="w-full bg-gray py-16 px-4 sm:px-0">
          <div className="sm:max-w-[90%] mx-auto grid md:grid-cols-2">
            <div>
              <img
                className="w-[90%] h-[360px] md:h-[550px] md:w-auto mx-auto my-4 md:pr-8"
                src={working}
                alt="/"
              />
              <a className="w-20 absolute h-5 md:-ml-6 -mt-6 bg-[#115CC9]/90"></a>
            </div>
            <div className="flex flex-col md:pl-6 font-notoSans justify-center">
              <p className="text-black ml-6 text-lg font-semibold uppercase py-8 sm:py-4">
                Empresa dinâmica e empreendedora
              </p>
              <p className="text-[#595959] sm:max-w-md text-base mx-6 text-justify">
                Somos uma metalomecânica de precisão com prestação de serviços
                em série ou isolado de corte laser, soldadura tig,
                mig-mag,eletrodo, quinagem de alta precisão, pintura, maquinação
                convencional e CNC.
                <br />
                <br />
                Uma empresa dinâmica, jovem e empreendedora presente no mercado
                desde 1984. Competente e sempre pronta para qualquer desafio.
                Transmitimos confiança aos nossos clientes e parceiros através
                de casos de sucesso dos quais nos orgulhamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
