import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { HiOutlineMailOpen, HiOutlineLocationMarker } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import RDCIcon from "../assets/logo_blue.svg";

const Footer = () => {
  return (
    <div className="w-full mx-auto  font-notoSans text-[#27282B] bg-[#E1E2E3] ">
      <img
        className="absolute sm:relative sm:w-20 w-14 mx-[5%] right-[90px] sm:right-auto sm:pl-2 pr-auto pt-12"
        src={RDCIcon}
        alt="/"
      />

      <div className="w-full px-[5%] py-4 sm:py-2 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 sm:justify-between mt-6">
        <div className="col-span-2 sm:col-auto mb-10 pl-8 sm:pl-auto sm:mb-0">
          {/* <h6 className='font-medium text-gray-600 capitalize'>menu</h6> */}
          <ul>
            <li className="py-1 font-medium text-md uppercase hover:animate-shake animate-once animate-ease-in">
              Quem Somos
            </li>
            <li className="py-1 font-medium text-md uppercase hover:animate-shake animate-once animate-ease-in">
              Serviços
            </li>
            <li className="py-1 font-medium text-md uppercase hover:animate-shake animate-once animate-ease-in">
              Projetos
            </li>
          </ul>
        </div>
        <div className="">
          <h6 className="uppercase font-thin text-md md:text-2xl">
            <HiOutlineLocationMarker
              color="#27282B"
              size={24}
              className="inline-block mb-2"
            />{" "}
            onde estamos
          </h6>
          <ul>
            <li className="px-8 font-normal text-xs md:text-sm">R. de Macau Lote 9,</li>
            <li className="px-8 font-normal text-xs md:text-sm">
            3880-338 Ovar
            </li>
          </ul>
        </div>
        <div className="pl-5">
          <h6 className="uppercase font-thin text-md md:text-2xl">
            <BsTelephone
              color="#27282B"
              size={24}
              className="inline-block mb-2"
            />{" "}
            contactos
          </h6>
          <ul>
            <li className="px-8 font-normal text-xs md:text-sm">
              +351 912 213 613
            </li>
            <li className="px-8 font-normal text-xs md:text-sm">
              +351 256 597 322
            </li>
            <li className="px-8 font-normal py-2 text-xs md:text-sm">
              (custo chamada rede fixa nacional)
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[7%] py-2">
        <div className="z-30 flex gap-3 w-1/2 md:w-[10%] pb-6">
          <a href="mailto: geral@rdcovar.com">
            <HiOutlineMailOpen color="#115CC9" size={30} />
          </a>
          <a href="https://www.facebook.com/search/top?q=rdc%20metalomec%C3%A2nica&locale=pt_PT">
            <CiFacebook color="#115CC9" size={30} stroke="2px" />
          </a>
          <a href="https://www.instagram.com/rdcovar/">
            <FaInstagram color="#115CC9" size={30} />
          </a>
        </div>
      </div>
      <div className="w-full bg-white text-center">
        <h1 className="font-normal py-4 text-xs sm:text-sm">
          © RDC - metalomecânica/inox{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
