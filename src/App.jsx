import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Eduction from './Components/Eduction';

import Footer from "./Components/Footer";
import DarkMode from "./Components/DarkMode";
import Loadder from "./Components/Loadder";
import Translate from './Components/Translate.jsx'
import './i18n.js'; // Import the i18n configuration

import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(false);
  window.addEventListener(("blur"),()=>{
    document.title = "Breakup :(";
  });
  window.addEventListener(("focus"),()=>{
    document.title = "A'mr dawoodi resume";
  });

   // useEffect to simulate the page loading
   useEffect(() => {
    // Simulate an API call or data loading
    const timer = setTimeout(() => {
      setIsLoading(false); // After the "loading" completes, set isLoading to false
    }, 100); // Example delay of 3 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);


  
  return (
    <>
    {isLoading ? 
    <div className='container mx-auto w-full h-screen flex   justify-center items-center  	'>
      <div className='flex flex-col justify-center items-center h-full space-y-10'>Please Wait...<Loadder/></div>
    </div>
    : 
        <BrowserRouter>
            <Routes>
              <Route path="/"  element={ [<Translate/>,<Navbar SetDarkModeValue={setData}/>, <Header  />,<About/>,<Skills/>,<Experience/>,<Work/>,<Eduction/>,<Footer/>]}>
              </Route>
            </Routes>
       </BrowserRouter>
    }
    </> 
  )
} 

export default App
