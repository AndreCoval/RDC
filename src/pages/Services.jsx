import React from "react";
import working from "../assets/Imagens stock/quem_somos-empresadinamica.jpeg";
import banner from "../assets/Imagens stock/servicos-banner.jpeg";
import pic1 from "../assets/Imagens stock/servicos-serralharia.jpeg";
import pic2 from "../assets/Imagens stock/servicos-corte_laser.jpeg";
import pic3 from "../assets/Imagens stock/servicos-maquinacao.jpeg";
import pic4 from "../assets/Imagens stock/servicos-manutencao_industrial.jpeg";

function Services() {
  return (
    <div className="text-white pt-8 md:pt-14 my-auto font-notoSans w-full h-full">
      <div className="absolute skew-y-[5deg] z-0 -mt-14 sm:-mt-24 lg:-mt-40 w-full h-[150px] sm:h-[400px] bg-[#E1E2E3]"></div>
      <div className="max-w-[1240px] mx-auto">
        {/* Hero Banner */}
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className="w-[90%] mx-auto h-60
              sm:h-80 lg:h-[460px] font-notoSans text-center relative justify-end flex flex-col bg-cover bg-center"
        >
          {/* <img className="relative" src={banner} alt="/" /> */}
          <a className="absolute bg-black/60 w-full h-full"></a>
          <h2 className="font-normal text-xs sm:text-sm lg:text-base uppercase relative">
            qualidade e rigor absoluto
          </h2>
          <h5 className="w-full mb-10 text-5xl sm:text-8xl relative">
            os nossos serviços
          </h5>
        </div>

        {/* Mensagem */}
        <div className="w-full mt-0 flex font-notoSans">
          <p
            className="text-sm sm:text-lg mt-10 justify-center px-12 sm:mx-auto w-full md:max-w-[550px]
           text-[#809FC6] font-medium text-center"
          >
            Atendimento rápido e personalizado, capacidade de resposta e
            orçamentação correta e eficaz, uma boa relação qualidade/preço.
          </p>
        </div>

        {/* Inicio dos Serviços */}
        <div className="max-w-[90%] md:max-w-full mx-auto bg-gray py-16 px-4 sm:px-0">
          {/* 1º Serviço */}
          <div className="md:max-w-full  mx-auto gap-12 md:flex grid">
            <div className="">
              <img
                className="w-[90%] md:w-[800px] h-[250px] md:h-[400px] mx-auto object-cover"
                src={pic1}
                alt="/"
              />
              <a className="w-20 absolute h-5 md:-ml-4 -mt-2 bg-[#115CC9]/90"></a>
            </div>
            <div
              className="md:absolute flex flex-col md:pl-6 font-notoSans md:h-[35%] bg-[#091E38] 
            md:w-[600px] md:right-[15%] mt-4 md:mt-10"
            >
              <h1 className="text-white ml-8 text-lg font-semibold uppercase pt-6 pb-4 sm:py-4">
                Serralharia Geral
              </h1>
              <p className="text-white sm:max-w-md font-normal text-xs mx-8 mb-6">
                Analisamos e desenvolvemos projetos variados.
                <br />
                Contamos com ótimas instalações, maquinaria e ferramenta de
                precisão, técnicos formados e competentes com elevado rigor de
                qualidade e grande sentido de responsabilidade.
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-normal my-2 text-xs mx-8">
                Área fabril com 1000m2
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-normal my-2 text-xs mx-8">
                Cabine de pintura com 150m2
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-normal my-2 text-xs mx-8 mb-14">
                Soldadura Tig, Mig-Mag em aço carbono, Inox e alumínio
              </p>
            </div>
          </div>

          {/* 2º serviço */}
          <div className="md:max-w-full my-32 mx-auto gap-10 md:flex grid">
            <a className="w-20 absolute h-5 md:mt-9 md:-ml-4 -ml-4 mt-8 bg-[#115CC9]/90"></a>
            <div
              className="md:absolute flex flex-col md:pl-6 font-notoSans md:h-[35%] bg-[#091E38] 
            md:w-[600px] md:left-[15%] justify-center mt-12 md:ml-11"
            >
              <h1 className="text-white ml-8 text-lg font-semibold uppercase pt-6 pb-4 sm:py-4">
                corte laser e quinagem de alta precisão
              </h1>
              <p className="text-white sm:max-w-md font-normal text-xs mx-8 mb-6">
                Dispomos de grande stock de matéria prima, Flexibilidade de
                produção e claro, sempre com rapidez e qualidade.
                <br />
                <b>Entregas Grátis em 48h e orçamento Grátis</b>
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-bold my-2 text-xs mx-8">
                Área de trabalho: 3000x1500mm
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-bold mt-2 text-xs mx-8">
                Medidas máximas:
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-normal text-xs mx-8 mb-14">
                // Aço carbono: 22mm (corte) | 8mm(quinagem)
                <br />
                // Aço Inoxidável: 12mm(corte) | 6mm(quinagem)
                <br />
                // Alumínio: 15mm(corte) | 10mm(quinagem)
              </p>
            </div>
            <div className="w-full ">
              <img
                className="w-[90%] md:-mr-10 mx-auto md:w-[800px] md:h-[400px] h-[250px] md:ml-auto object-cover"
                src={pic2}
                alt="/"
              />
            </div>
          </div>

          {/* 3º Serviço */}
          <div className="md:max-w-full  mx-auto gap-12 md:flex grid">
            <div className="">
              <img
                className="w-[90%] md:w-[800px] h-[250px] md:h-[400px] mx-auto object-cover"
                src={pic3}
                alt="/"
              />
              <a className="w-20 absolute h-5 md:-ml-4 -mt-2 bg-[#115CC9]/90"></a>
            </div>
            <div
              className="md:absolute flex flex-col md:pl-6 font-notoSans md:h-[35%] bg-[#091E38] 
            md:w-[600px] md:right-[15%] mt-4 md:mt-10"
            >
              <h1 className="text-white ml-8 text-lg font-semibold uppercase pt-6 pb-4 sm:py-4">
                Maquinação convencional e cnc
              </h1>
              <p className="text-white sm:max-w-md font-normal text-xs mx-8 mb-6">
                Habituados a trabalhar com diferentes materiais e para
                indústrias distintas, temos a capacidade de selecionar o
                processo mais eficaz em cada um dos projetos que integramos,
                tendo em conta as especificações técnicas dos nossos clientes,
                ou seja, em função das tolerâncias e do aspeto visual da peça.
                Temos parcerias para maquinação CNC a qual garantimos o melhor
                prazo de entrega.
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-bold mt-2 text-xs mx-8">
                Serviço de torno:
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-normal text-xs mx-8 mb-14">
                // Máx 5000mm entre pontos
                <br />
                // Máx 900mm de diâmetro
              </p>
            </div>
          </div>

          {/* 3.5º Serviço Adicional */}
          <div>
            <div className="w-full mx-auto my-8 pt-12 pb-5 text-center bg-[#EAEAEA] rounded-md font-notoSans grid grid-cols-2">
              <h1 className="text-lg sm:text-xl col-span-2 font-semibold uppercase m-4 text-[#000000]">
                Serviços Adicionais à maquinação
              </h1>
              <div className="grid">
                <p className="text-xs mx-auto sm:text-lg max-w-xs font-medium text-[#132A3D]">
                  Retificação cilíndrica e plana; Tratamento de superfícies;
                  Tratamentos térmicos;
                </p>
              </div>
              <div className="grid">
                <p className="text-xs mx-auto sm:text-lg max-w-xs font-medium text-[#132A3D]">
                  Corte automático de matéria prima; Erosão a fio e por
                  penetração; Estampagem.
                </p>
              </div>
            </div>
          </div>

          {/* 4º serviço */}
          <div className="md:max-w-full mt-32 mx-auto gap-10 md:flex grid">
            <a className="w-20 absolute h-5 md:mt-9 md:-ml-4 -ml-4 mt-8 bg-[#115CC9]/90"></a>
            <div
              className="md:absolute flex flex-col md:pl-6 font-notoSans md:h-[35%] bg-[#091E38] 
            md:w-[600px] md:left-[15%] justify-center mt-12 md:ml-11"
            >
              <h1 className="text-white ml-8 text-lg font-semibold uppercase pt-6 pb-4 sm:py-4">
                manutenção industrial
              </h1>
              <p className="text-white sm:max-w-md font-normal text-xs mx-8 mb-6">
                Na RDC pomos à disposição dos Clientes tudo o que é necessário
                para a manutenção das instalações com o objectivo de alcançar a
                otimização dos recursos. Para isso contamos com uma das equipas
                mais qualificadas do setor.
                <br />
                <br />
                <b>
                  Conseguimos destacar equipas de manutenção e montagens
                  industriais em qualquer parte do mundo.
                </b>
              </p>
              <p className="text-[#809FC6] sm:max-w-md font-normal text-xs mx-8 mb-14">
                // Manutenção preventiva e corretiva
                <br />
                // Serviço nacional e Internacional
              </p>
            </div>
            <div className="w-full ">
              <img
                className="w-[90%] md:-mr-10 mx-auto md:w-[800px] md:h-[400px] h-[250px] md:ml-auto object-cover"
                src={pic4}
                alt="/"
              />
            </div>
          </div>

          {/* Fim dos serviços */}
        </div>
      </div>
    </div>
  );
}

export default Services;
