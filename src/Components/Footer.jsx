import React, { useState, useEffect } from 'react';

import { Clipboard } from "flowbite-react";
const navigation = [
    { name: 'About', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: true },
    { name: 'Work', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: false },
    { name: 'Testmonials', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: false },

  ]
function Footer() {

        //start darkmode
        const [darkMode, setDarkMode] = useState(false);
        useEffect(() => {
            // setDarkMode(darkmodeValue)  
            const value = localStorage.getItem('darkMode') === 'false' ;
            setDarkMode(value);
        })
        //end darkmode
  return (
    <>
        <div id='Footer' className={`container mx-auto w-full    flex flex-col items-center text-center space-y-8 py-5 ${darkMode?'bg-white ':'bg-darker text-white'} `}>
            <div ><p className={` rounded-xl p-2 px-7 ${darkMode ? 'bg-about-grey': 'bg-tags'} `}>Get in touch</p></div>
            <div className={`text-xl `}>What next? Fell free research out to me if you're looking for a developer , have a quaility , or simplay want to connect. </div>
            <div className='w-full font-bold text-2xl  space-y-5'>
               <div className='flex  items-center w-full justify-center space-x-3 '>
                    <div >
                    <a href="mailto:amr.dawoodi@hotmail.com" className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 hover:bg-about-body-grey "><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg></a>
                    </div>
                    <div className='  max-sm:text-xl'>amr.dawoodi@hotmail.com</div>
                    <div className='relative  pl-8'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg> */}
                        <Clipboard.WithIcon     valueToCopy="amr.dawoodi@hotmail.com"   label="Copy"  />

                    </div>
                </div>
                <div className='flex  items-center w-full justify-center space-x-4 '>
                    <div >
                       <a href="https://wa.me/963999596071"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 hover:bg-about-body-grey"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg></a>
                        </div>
                    <div>+963999596071</div>
                    <div className='relative  pl-6'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg> */}
                            <Clipboard.WithIcon   className=''  valueToCopy="+963999596071"   label="Copy"  />
                    </div>
                </div>
            </div>
            <div className='w-full text-xl '>you may also find me on following platforms</div>
            <div className='w-full  flex justify-center items-center space-x-5 '>
                <div><a target='_blank' href="https://github.com/omar10120/"><svg className={`h-8 w-8 ${darkMode?'text-gray-500':'text-white'}`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a></div>
                <div><a target='_blank' href="https://www.facebook.com/amr.dawode.7"><svg className={`h-8 w-8 ${darkMode?'text-gray-500':'text-white'}`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></div>
                <div><a target='_blank' href="https://www.linkedin.com/in/omar-dawoodi-65044b201/"><svg className={`h-8 w-8 ${darkMode?'text-gray-500':'text-white'}`}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></div>
            </div>
        </div>
    </>
  )
}

export default Footer