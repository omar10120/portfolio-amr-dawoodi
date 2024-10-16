// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'





  function classNames(...classes) {
    

    return classes.filter(Boolean).join(' ')
  }
function ThemeSwitcher({ SetDarkModeValue   }) {

  const [darkMode, setDarkMode] = useState(false);
  


  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Work', href: '#work', current: false },
    { name: 'Testimonials', href: '#Testimonials', current: false },
    { name: 'Contact', href: '#Footer', current: false },
  ]);

  const [loading, setloading] = useState([
    { loadingValue: false },

  ]);
  const [CV, setcv] = useState([
    { cvhref: 'https://drive.usercontent.google.com/u/0/uc?id=1L4LwiPpIccQz0pOBoISvAVKij1D4gc6e&export=download' },

  ]);
  const handleClick = (clickedItem) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === clickedItem.name
          ? { ...item, current: true } // Set current to true for the clicked item
          : { ...item, current: false } // Set current to false for other items
      )
    );
    
    
    
  };


  const HandeLoading = (clickedItem) => {
    setloading((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === clickedItem.name
          ? { ...item, loadingValue: true } // Set current to true for the clicked item
          : { ...item, loadingValue: false } // Set current to false for other items
      )
    )
    
    setTimeout(() => {
      setloading((prevNavigation)=> prevNavigation.map((item)=>
      item.loadingValue === clickedItem.name ?  { ...item, loadingValue: false }  : { ...item, loadingValue: false} ))
    }, 4000);

    
  };

  

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


  return (
    
    <>




  <Disclosure as="nav" className="bg-white-800">

    

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
       

            </div>
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-6 ">
                {navigation.map((item) => (
                  <a
                   key={item.name}
                   onClick={() => handleClick(item)}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? `${darkMode?'bg-white':'bg-grey-900'}  text-black ` : `  text-gray-400 hover:bg-gray-700 hover:text-white `,
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
        
            <button
            onClick={toggleDarkMode}
            className={`px-2 py-2 rounded-full  ${
            darkMode ? 'bg-yellow' : 'bg-gray-800'
            } ${
              darkMode ? 'text-gray-900' : 'text-white '
            } transition-colors duration-200`}
            >
            {darkMode ? 
            

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  version="1.1"
  className="h-6 w-6"
  viewBox="0 0 256 256"
  xmlSpace="preserve"
>
  <defs></defs>
  <g
    style={{
      stroke: "none",
      strokeWidth: 0,
      strokeDasharray: "none",
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: 10,
      fill: "none",
      fillRule: "nonzero",
      opacity: 1,
    }}
    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
  >
    <path
      d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(0,0,0)",fillRule: "nonzero",opacity: 1,}}transform="matrix(1 0 0 1 0 0)"strokeLinecap="round"/></g></svg>
             : 
             //start svg

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  version="1.1"
 className="w-6 h-6"
  viewBox="0 0 256 256"
  xmlSpace="preserve"
>
  <defs></defs>
  <g
    style={{
      stroke: "none",
      strokeWidth: 0,
      strokeDasharray: "none",
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: 10,
      fill: "none",
      fillRule: "nonzero",
      opacity: 1,
    }}
    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
  >
    <path
      d="M 45 68 c -12.682 0 -23 -10.317 -23 -23 c 0 -12.682 10.318 -23 23 -23 c 12.683 0 23 10.318 23 23 C 68 57.683 57.683 68 45 68 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
    <path
      d="M 45 17.556 c -1.657 0 -3 -1.343 -3 -3 V 3 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 11.556 C 48 16.212 46.657 17.556 45 17.556 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
    <path
      d="M 45 90 c -1.657 0 -3 -1.343 -3 -3 V 75.444 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 V 87 C 48 88.657 46.657 90 45 90 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
    <path
      d="M 14.556 48 H 3 c -1.657 0 -3 -1.343 -3 -3 c 0 -1.657 1.343 -3 3 -3 h 11.556 c 1.657 0 3 1.343 3 3 C 17.556 46.657 16.212 48 14.556 48 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
    <path
      d="M 87 48 H 75.444 c -1.657 0 -3 -1.343 -3 -3 c 0 -1.657 1.343 -3 3 -3 H 87 c 1.657 0 3 1.343 3 3 C 90 46.657 88.657 48 87 48 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
    <path
      d="M 66.527 26.473 c -0.768 0 -1.535 -0.293 -2.121 -0.878 c -1.172 -1.172 -1.172 -3.071 0 -4.243 l 8.171 -8.171 c 1.172 -1.172 3.07 -1.171 4.242 0 c 1.172 1.172 1.172 3.071 0 4.243 l -8.171 8.171 C 68.063 26.18 67.295 26.473 66.527 26.473 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
    <path
      d="M 15.302 77.698 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 8.171 -8.171 c 1.171 -1.172 3.071 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -8.171 8.171 C 16.837 77.405 16.069 77.698 15.302 77.698 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
    <path
      d="M 23.473 26.473 c -0.768 0 -1.536 -0.293 -2.121 -0.878 l -8.171 -8.171 c -1.172 -1.172 -1.172 -3.071 0 -4.243 c 1.172 -1.172 3.072 -1.171 4.243 0 l 8.171 8.171 c 1.172 1.172 1.172 3.071 0 4.243 C 25.008 26.18 24.24 26.473 23.473 26.473 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
    <path
      d="M 74.698 77.698 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -8.171 -8.171 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 8.171 8.171 c 1.172 1.171 1.172 3.071 0 4.242 C 76.233 77.405 75.466 77.698 74.698 77.698 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(244,177,44)",
        fillRule: "nonzero",
        opacity: 1,
      }}
      strokeLinecap="round"
    />
  </g>
</svg>

             //end  svg
             }
        </button>    
            <div className="relative ml-3">         
              <div className=' '>
             
                  <a href="https://drive.usercontent.google.com/u/0/uc?id=14iGKltNFUo6wtgGhr32wBLT0J2viA9I3&export=download" download={"a'mr dawoodi resume.pdf"}>
                  
                {loading.map((item) => (        

                    <button 
                    onClick={() => HandeLoading(item)}
                    className={`relative flex rounded-full ${darkMode?'bg-white text-black font-bold':'bg-darker text-white'}  text-sm rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 `}>
                    {item.loadingValue ? 
                    
                      <div role="status" className='px-2'>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                        : ''}
                        {item.loadingValue? 'Please Wait':'Download CV'}     
                    </button>
                  ))}
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