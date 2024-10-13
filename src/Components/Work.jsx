import React, { useState, useEffect } from 'react';

const navigation = [
    { name: 'About', src: '/src/images/img_flowers.jpg', current: true },
    { name: 'Work', src: '/src/images/img_flowers.jpg', current: false, reverse : 'flex-row-reverse' },
    { name: 'Work', src: '/src/images/img_flowers.jpg', current: false },


  ]
  
const navigation2 = [
    { name: 'javascripit', src: '/src/images/img_flowers.jpg', current: true },
    { name: 'react', src: '/src/images/img_flowers.jpg', current: false, reverse : 'flex-row-reverse' },
    // { name: 'Work', src: '/src/images/img_flowers.jpg', current: false },


  ]

function Work() {

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
        <div id='work' className={`container mx-auto w-full h-full  flex flex-col justify-around items-center  relative  space-y-12 ${darkMode? 'bg-white':'bg-darker'}  `}>
            <div className='py-5'><p className={`bg-about-grey  rounded-xl p-2 px-7  ${darkMode ? '' : 'bg-tags text-white'}  `}>Work</p></div>
            <div className='text-2xl '>some of the noteworthy projects i have built:</div>
            <div class="grid grid-cols-1 gap-y-20  w-full py-5 ">
                {navigation.map((item) => (
                            <div className={`flex w-full space-x-8 max-sm:space-x-0 space-y-8 text shadow-inner rounded-xl max-xl:flex-col ${darkMode?'bg-about-body-grey':'bg-dark'} ${item.reverse} `} >
                                <div className={`w-1/2 ${darkMode?'bg-about-body-grey': 'bg-tags'} flex justify-center items-center rounded-xl py-18 max-xl:w-full py-8`}>
                                    <img src="/src/images/img_flowers.jpg" className='h-70 w-96 rounded-xl' alt="" />
                                </div>
                                <div className='w-1/2 flex  flex flex-col  h-full  space-y-5 w-full   '>
                                    <div className={`font-bold text-2x1 ${darkMode?'':'text-white'} `}>Fiskill</div>
                                    <div className={`text-xl ${darkMode?'':'text-white'} `}>Lorem ipsum some of the noteworthy projects i have built some of the noteworthy projects i have built some of the noteworthy projects i have built some of the noteworthy projects i have built some of the noteworthy projects i have built </div>
                                    <div className='grid grid-cols-1 gap-4 '>
                                    {/* {navigation2.map((item) => (  */}
                                        <div className='flex w-full space-x-10 max-sm:space-x-3 '>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.name}</p></div>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.name}</p></div>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.name}</p></div>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.name}</p></div>
                                        </div>
                                        {/* ))}    */}
                                        <div className='flex w-full space-x-10 max-sm:space-x-3'>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>Work</p></div>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>next js</p></div>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>typescript</p></div>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>pythondaw</p></div>
                                        </div>
                                        <div className='flex w-full space-x-10 max-sm:space-x-3'>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>pythonweq</p></div>
                                            <div ><p className={` ${darkMode?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>pythonwa</p></div>
                                        </div>
                                    </div>
                                    <div className='py-3'><svg fill="#000000" height="15x" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                        viewBox="0 0 384.97 384.97" xml:space="preserve"><g><g id="Fullscreen_1_">
                                            <path d="M372.939,216.545c-6.123,0-12.03,5.269-12.03,12.03v132.333H24.061V24.061h132.333c6.388,0,12.03-5.642,12.03-12.03
                                                S162.409,0,156.394,0H24.061C10.767,0,0,10.767,0,24.061v336.848c0,13.293,10.767,24.061,24.061,24.061h336.848
                                                c13.293,0,24.061-10.767,24.061-24.061V228.395C384.97,221.731,380.085,216.545,372.939,216.545z"/>
                                            <path d="M372.939,0H252.636c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h91.382L99.635,268.432
                                                c-4.668,4.668-4.668,12.235,0,16.903c4.668,4.668,12.235,4.668,16.891,0L360.909,40.951v91.382c0,6.641,5.39,12.03,12.03,12.03
                                                s12.03-5.39,12.03-12.03V12.03l0,0C384.97,5.558,379.412,0,372.939,0z"/></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg></div>
                                     </div>
                             </div>
                        ))}                 
            </div>
        </div>
    </>
  )
}

export default Work