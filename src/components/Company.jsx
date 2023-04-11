import React from "react";
import pic1 from "../assets/Asset 11-100.jpg";

const company = () => {
  return (
    <div className="w-full mt-0 sm:pt-20 lg:pt-32 flex font-notoSans relative js-show-on-scroll">
      <div className="mx-auto flex flex-col">
        <div className="flex flex-col mx-auto ">
          <h4
            className="w-full mb-4 text-5xl sm:text-6xl xl:text-8xl
                md:text-9xl text-center font-extraBold">
            os nossos serviços
          </h4>
          <p className="text-xs sm:text-sm justify-center px-6 sm:px-0 sm:mx-auto w-full md:max-w-[670px] text-[#595959] font-normal text-center">
            Asseguramos a máxima qualidade e o rigor absoluto nos nossos
            projetos. Garantimos um serviço de excelência e aconselhamos a
            melhor solução para o desenvolvimento da sua ideia. Atendimento
            rápido e personalizado, capacidade de resposta e orçamentação
            correta e eficaz, uma boa relação qualidade/preço. Temos ligações
            aos sectores Automóvel, Aeronáutico, Têxtil, Alimentar, Robótica e
            na Área de Manutenção Industrial, entre as mais diversas indústrias
            e os mais variados clientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default company;
