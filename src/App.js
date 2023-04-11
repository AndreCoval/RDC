import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Whoweare from "./components/Whoweare";
import Contactform from "./components/Contactform";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Company/>
      <Cards/>
      <Contactform/>
      <Footer/>
    </div>
  );
}

export default App;
