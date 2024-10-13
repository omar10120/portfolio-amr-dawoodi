import React, { useState, useEffect } from 'react';

const navigation = [
    { name: 'About', src: '/src/images/img_flowers.jpg', current: true },
    { name: 'Work', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Testmonials', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
    { name: 'Contact', src: '/src/images/img_flowers.jpg', current: false },
  ]
   
function Skills() {
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
        <div className={`container mx-auto w-full h-[60vh] max-xl:h-auto  flex flex-col justify-evenly items-center  max-lg:flex-col relative ${darkMode ? 'bg-white' : 'bg-darker text-white 	'}  my-10 space-y-5 `}>
            <div className='max-xl:my-10'><p className={`${darkMode ? 'bg-about-grey' : 'bg-tags'}  rounded-xl p-2 px-7  `}>Skills</p></div>
            <div className='text-2xl max-xl:my-10'>The skills, tools and technologies i am really good at :</div>
            <div class="grid grid-cols-8 gap-12 max-sm:grid-cols-3 max-xl:grid-cols-4 ">
                {navigation.map((item) => (
                            <div className='flex justify-center items-center flex-col' ><img className="object-fill h-28 w-28" src={item.src}/> <p className='my-2'>{item.name}</p></div>
                        ))}                 
            </div>
        </div>
    </>
  )
}

export default Skills