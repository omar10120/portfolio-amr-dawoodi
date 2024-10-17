// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import Header from "./Header";



// const ThemeSwitcher = (setdarkmodevalue) => {
function ThemeSwitcher({ SetDarkModeValue }) {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'false';
    setDarkMode(isDarkMode);
    SetDarkModeValue(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    SetDarkModeValue((prevMode) => !prevMode); 
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
      document.body.classList.toggle('bg-dark' , !isDarkMode);
    

    

  };
  return (
    <>
<div className='container mx-auto  w-full justify-end mr-60   flex relative   '>

                <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-full  ${
            darkMode ? 'bg-yellow' : 'bg-gray-800'
            } ${
              darkMode ? 'text-gray-900' : 'text-white '
            } transition-colors duration-200`}
            >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>    
  </div>
  
    </>
  );
};

export default ThemeSwitcher;