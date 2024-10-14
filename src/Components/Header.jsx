
import './Header.Module.css'
import React, { useState, useEffect } from 'react';


 const Header = ({}) => {

    //start darkmode
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {

        const value = localStorage.getItem('darkMode')=== 'false' ;
        setDarkMode(value);
    })
    //end darkmode
  return (
    <>

    
    <div className={`container mx-auto  flex h-96 max-sm:h-auto  max-sm:flex-col-reverse   ${darkMode ? 'bg-white':'bg-darker text-white'} `}>
        <div className="flex w-2/3  flex-col justify-around max-sm:w-full max-sm:justify-center max-sm:py-5   " >
            <div>
                <h1 className="text-3xl font-bold my-1 ">
                Hi,Im A'mr</h1>
                <p className='text-xl'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
            </div>
            <div >

                <div className='flex items-center py-2 '>
                    <svg className={`h-6 w-6 text-gray-800 ${darkMode? 'text-grey-800':'text-white'} `}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <p className='mx-2 text-xl '>A'mr dawoodi , Syria </p>
                </div>
                <div className='flex   '>
                    <svg class="h-6 w-6 text-green-800 flex mt-1.5  "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" fill='green' cy="9" r="6" /></svg> <p className='mx-2  text-xl'>Avalibale for new projects</p>
                </div>
            </div>
            <div className='container mx-auto flex w-full p-0 max-sm:py-5	'>
                <div className='flex w-32 justify-around  '>
               <a target='_blank' href="https://github.com/omar10120/"> <svg className={`h-8 w-8 ${darkMode?'text-gray-500':'text-white'} `}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a>
                <a target='_blank' href="https://www.facebook.com/amr.dawode.7"><svg className={`h-8 w-8 ${darkMode?'text-gray-500':'text-white'}`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                <a target='_blank' href="https://www.linkedin.com/in/omar-dawoodi-65044b201/"><svg className={`h-8 w-8 ${darkMode?'text-gray-500':'text-white'}`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
                
                </div>
            </div>
        </div>
        <div class="flex w-1/3 max-sm:w-full  justify-center items-center max-sm:my-12  ">
            <div className=' h-48 w-3/5' >
              <img className="object-fill h-48 w-96  image	" src='/src/images/me.jpg'/>
            </div>

        </div>
    </div>

    </>
  );
};

export default Header;


