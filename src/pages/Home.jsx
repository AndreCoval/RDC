import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Company from "../components/Company";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

function Home() {
  return (
    <> 
    <Hero/>
    <Company/>
    <Cards/>
    <Contactform/>
    </>
  )
}

export default Home