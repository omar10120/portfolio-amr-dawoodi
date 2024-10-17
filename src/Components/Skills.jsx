import React, { useState, useEffect } from 'react';

const navigation = [
    { name: 'Javascript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', current: true },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', current: false },
    { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', current: false },
    { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', current: false },
    { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', current: false },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', current: false },
    { name: '.Net Core', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg', current: false },
    { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', current: false },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', current: false },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', current: false },
    { name: 'SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg', current: false },
    { name: 'Blazor FreamWork', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg', current: false },
    { name: 'APACHE', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg', current: false },
    { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', current: false },
    { name: 'Sass', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', current: false },
    // { name: 'Tawilwind', src: '<svg fill="#36B7F0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" stroke="#36B7F0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>', current: false },
  ]
   
function Skills() {
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
        <div className={`container mx-auto w-full  max-xl:h-auto h-full flex flex-col justify-evenly items-center  max-lg:flex-col relative ${darkMode == 'false' ? 'bg-white' : 'bg-darker text-white 	'}  my-10 space-y-5 `}>
            <div className='max-xl:my-10'><p className={`${darkMode == 'false' ? 'bg-about-grey' : 'bg-tags'}  rounded-xl p-2 px-7  `}>Skills</p></div>
            <div className='text-2xl max-xl:my-10'>The skills, tools and technologies i am really good at :</div>
            <div class="grid grid-cols-8 gap-12 max-sm:grid-cols-3 max-xl:grid-cols-4 ">
                {navigation.map((item) => (
                            <div className='flex justify-center items-center flex-col' ><img className="object-fill h-28 w-28" src={item.src}/> <p className='my-2'>{item.name}</p></div>
                        ))}      
                            <div className='flex justify-center items-center flex-col' ><svg fill="#36B7F0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" stroke="#36B7F0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg> <p className='my-2'>Tawilwind</p></div>
           
            </div>
                        
            
        </div>
    </>
  )
}

export default Skills