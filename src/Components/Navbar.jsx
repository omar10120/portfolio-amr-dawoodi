// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Work', href: '#work', current: false },
  { name: 'Testmonials', href: '#Testimonials', current: false },
  { name: 'Contact', href: '#Footer', current: false },
]


  function classNames(...classes) {
    

    return classes.filter(Boolean).join(' ')
  }
function ThemeSwitcher({ SetDarkModeValue }) {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
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
  const [data, setData] = useState(false);

  return (
    
    <>





  <Disclosure as="nav" className="bg-white-800">

    
        {/* <Header/><About/><Skills/><Experience/><Testimonials/><Footer/><Work/> */}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 " >
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
                  


            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <a
                   
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-grey-900 text-black ' : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                  
                ))} 
                     
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* <DarkMode SetDarkModeVal0e={setData} /> */}
          {/* <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-full ${
            darkMode ? 'bg-yellow' : 'bg-gray-800'
            } ${
            darkMode ? 'text-gray-900' : 'text-white '
            } transition-colors duration-200`}
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>  */}
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
              
            </button> */}

            {/* Profile dropdown */}
            {/* <DarkMode SetDarkModeValue={setData} /> */}
            
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
        
            <div className="relative ml-3">                
              <div>
                <a href="/src/CvFile/a'mr dawoodi resume.pdf" download={"a'mr dawoodi resume.pdf"}>
                  <button className={`relative flex rounded-full ${darkMode?'bg-white text-black font-bold':'bg-darker text-white'}  text-sm rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 `}>
                      Download CV     
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className={`sm:hidden ${darkMode?'':''}  `}>
        
        <div className="space-y-1 px-2 pb-3 pt-2">
            
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
              
            </DisclosureButton>
          ))}
          
        </div>
      </DisclosurePanel>     
       
    </Disclosure>


    </>
  );
};

export default ThemeSwitcher;