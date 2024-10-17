import React, { useState, useEffect } from 'react';

const navigation = [
    {name: 'Bird View', freamwork1: 'HTML5',freamwork2: 'CSS', freamwork3: 'Javascript',freamwork4: 'React', src: 'https://i.ibb.co/6ZT4sDS/image.png', current: true,hidden:true , href : 'https://design-web-template.vercel.app/',github:'https://github.com/omar10120/GraphicAndWebDesign', text: 'Reviewing single page site template for Casper Technical Company, with responsive design for all platforms , simple modren design '},
    {name: 'A\'mr Company',freamwork1: 'HTML5',freamwork2: 'CSS', freamwork3: 'Javascript',freamwork4: 'PHP', src: 'https://i.ibb.co/dL9dSvv/image.png', current: false,hidden :true , reverse : 'flex-row-reverse', href : 'https://amrcompany.vercel.app/',github:'https://github.com/omar10120/A-mr-company', text: ' template contains single page site talk about A\'mr Al-Majedea Company, and provide an explanation and presentation of the services and works of Omar Al-Majedea Company, and a section to communicate with the company and explain some of the company’s works.' },
    {name: 'Mountains View',freamwork1: 'HTML5',freamwork2: 'CSS', freamwork3: 'Javascript',freamwork4: 'PHP',  src: 'https://i.ibb.co/Lxrpmst/image.png', current: false ,hidden:true,  href : 'https://mountains-view.vercel.app/',github:'https://github.com/omar10120/Mountains-View', text:'The portfolio example contains single page  , with responsive design and information about me'},
    {name: 'Graphic Desgin Template',freamwork1: 'HTML5',freamwork2: 'CSS', freamwork3: 'Javascript',freamwork4: 'PHP',  src: 'https://i.ibb.co/p36bLFg/image.png', current: false ,hidden:true,  reverse : 'flex-row-reverse',  href : 'https://graphic-and-web-design.vercel.app/',github:'https://github.com/omar10120/GraphicAndWebDesign', text:'Graphic & Web design template with single page site  '},


  ]
  
const navigation2 = [
    { name: 'javascripit', src: '/src/images/img_flowers.jpg', current: true },
    { name: 'react', src: '/src/images/img_flowers.jpg', current: false, reverse : 'flex-row-reverse' },
  ]

function Work() {

         //start darkmode
         const [darkMode, setDarkMode] = useState(false);
         useEffect(() => {
             // setDarkMode(darkmodeValue)  
             const value = localStorage.getItem('darkMode') ;
             setDarkMode(value);
         })
         //end darkmode

  return (
    <>
        <div id='work' className={`container mx-auto w-full h-full  flex flex-col justify-around items-center  relative  space-y-12 ${darkMode == 'false'? 'bg-white':'bg-darker'}  `}>
            <div className='py-5'><p className={`bg-about-grey  rounded-xl p-2 px-7  ${darkMode == 'false' ? '' : 'bg-tags text-white'}  `}>Work</p></div>
            <div className='text-2xl '>some of the noteworthy projects i have built:</div>
            <div class="grid grid-cols-1 gap-y-20  w-full py-5 ">
                {navigation.map((item) => (
                            <div className={`flex w-full space-x-8 max-sm:space-x-0 space-y-8 text shadow-inner rounded-xl max-xl:flex-col ${darkMode == 'false'?'bg-white':'bg-dark'} ${item.reverse} `} >
                                <div className={`w-1/2 ${darkMode == 'false'?'bg-about-body-grey': 'bg-tags'} flex justify-center items-center rounded-xl py-18 max-xl:w-full py-8`}>
                                    <img src={item.src} className='h-75 w-96 rounded-xl' alt="" />
                                </div>
                                <div className='w-1/2 flex  flex flex-col  h-full  space-y-5 w-full   '>
                                    <div className={`font-bold text-2x1 ${darkMode == 'false'?'':'text-white'} `}>{item.name}</div>
                                    <div className={`text-xl ${darkMode == 'false'?'':'text-white'} `}>{item.text} </div>
                                    <div className='grid grid-cols-1 gap-4 '>
                                    {/* {navigation2.map((item) => (  */}
                                        <div className='flex w-full space-x-10 max-sm:space-x-3 '>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.freamwork1}</p></div>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.freamwork2}</p></div>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.freamwork3}</p></div>
                                            {/* <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.freamwork4}</p></div> */}
                                        </div>
                                        {/* ))}    */}
                                        <div className={`flex w-full space-x-10 max-sm:space-x-3 ${item.hidden?'hidden':''}`}>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.freamwork1}</p></div>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.freamwork2} </p></div>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.freamwork3}</p></div>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>{item.freamwork4}</p></div>
                                        </div>
                                        <div className={`flex w-full space-x-10 max-sm:space-x-3 ${item.hidden?'hidden':''} `}>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>pythonweq</p></div>
                                            <div ><p className={` ${darkMode == 'false'?'bg-about-grey': 'bg-tags text-white'}  rounded-xl p-3 max-xl:p-2 max-sm:p-2`}>pythonwa</p></div>
                                        </div>
                                    </div>
                                    
                                            <div className='py-3 w-25 flex space-x-8  justify-start items-center group '>
                                                {/* <div className=' absolute p-2   w-30 mb-20 mr-17 opacity-0   ease-in-out duration-300
                                                after:content-[""] after:absolute after:left-[42%] after:top-full after:w-0 after:h-0 after:border-l-[10px] after:border-r-[10px] after:border-t-[10px] after:border-l-transparent after:border-r-transparent after:border-t-dark
                                                rounded-2xl text-black text-white bg-dark flex justify-center  items-center group-hover:opacity-100 '>Live Demo</div> */}
                                                <div > 
                                                     <a href={item.href} target='_blank'  >
                                                    {/* <svg fill="#000000" height="15x"  width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                                    viewBox="0 0 384.97 384.97" xml:space="preserve"><g><g id="Fullscreen_1_">
                                                        <path d="M372.939,216.545c-6.123,0-12.03,5.269-12.03,12.03v132.333H24.061V24.061h132.333c6.388,0,12.03-5.642,12.03-12.03
                                                            S162.409,0,156.394,0H24.061C10.767,0,0,10.767,0,24.061v336.848c0,13.293,10.767,24.061,24.061,24.061h336.848
                                                            c13.293,0,24.061-10.767,24.061-24.061V228.395C384.97,221.731,380.085,216.545,372.939,216.545z"/>
                                                        <path d="M372.939,0H252.636c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h91.382L99.635,268.432
                                                            c-4.668,4.668-4.668,12.235,0,16.903c4.668,4.668,12.235,4.668,16.891,0L360.909,40.951v91.382c0,6.641,5.39,12.03,12.03,12.03
                                                            s12.03-5.39,12.03-12.03V12.03l0,0C384.97,5.558,379.412,0,372.939,0z"/></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg> */}
                                                            <button className={` p-2 w-full   ${darkMode == 'false'?' bg-dark text-white':'bg-white text-black'} rounded `}>Live Demo</button></a>
                                               </div>
                                                <div>
                                                    <a href={item.github} target='_blank' ><button className={` p-2 w-full  ${darkMode == 'false'?' bg-dark text-white':'bg-white text-black'}   rounded bg-dark`}>GitHub</button></a>
                                                </div>
                                            </div>
                                     </div>
                             </div>
                        ))}                 
            </div>
        </div>
    </>
  )
}

export default Work