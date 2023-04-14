import React from "react";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import  Projects  from "./pages/Projects";
import  Nopage  from "./pages/Nopage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Whoweare from "./pages/Whoweare";

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/whoweare" element={<Whoweare/>}/>
          <Route path="*" element={<Nopage/>}/>
        </Routes>
      <Footer/>  
    </>
  );
}

export default App;
