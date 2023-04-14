import React from "react";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";

import Nopage  from "./pages/Nopage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


/* lazy-loading page */
const Home = React.lazy(() => import('./pages/Home'))
const Projects = React.lazy(() => import('./pages/Projects'))
const Services = React.lazy(() => import('./pages/Services'))
const Whoweare = React.lazy(() => import('./pages/Whoweare'))

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/home" element={
            <React.Suspense fallback={<>...</>}>
              <Home/>
            </React.Suspense>
          }/>

          <Route path="/projects" element={
            <React.Suspense fallback={<>...</>}>
              <Projects/>
            </React.Suspense>
          }/>

          <Route path="/services" element={
            <React.Suspense fallback={<>...</>}>
              <Services/>
            </React.Suspense>
          }/>

          <Route path="/whoweare" element={
            <React.Suspense fallback={<>...</>}>
              <Whoweare/>
            </React.Suspense>
          }/>

          <Route path="*" element={<Nopage/>}/>
        </Routes>
      <Footer/>  
    </>
  );
}

export default App;
