import React, { useState, useEffect } from 'react';
import './About.Module.css'
function About() {
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
        <div id='about' className={` container mx-auto  flex items-center justify-center w-full py-5  ${darkMode?'bg-about-body-grey':''} `}><p className={`  rounded-xl p-2 my-10 ${darkMode?'bg-about-grey text-black':'bg-tags text-white'} `}>about me</p> </div>
        <div className={`container mx-auto w-full  flex h-dvh py-8 h-full max-lg:flex-col relative ${darkMode?'bg-about-body-grey':''} `}>
            <div class="flex w-1/2 max-lg:w-full  justify-center items-center max-lg:my-12 ">
                <div className=' h-96 w-3/5 max-lg:w-full ' >
                <img className="object-fill h-96 w-96 image max-lg:w-full	" src='/src/assets/selfe.jpg'/>
                </div>
            </div>
            <div class="flex w-1/2 flex-col justify-center items-center  max-lg:w-full   ">
                <div className={`flex h-auto   flex-col paragraph  w-full text-xl ${darkMode? 'text-black': 'text-white'} `}> 
                        <div className='text-2xl font-bold '>Curious about me? Here you have it:</div>
                        <p >I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matters to me.</p>
                        <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                        <p>
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                        </p>
                        <p>
                        When I'm not in full-on developer mode, you can find me hovering around on Twitter or on Indie Hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                        </p>
                        <p>
                        Finally, some quick bits about me: 
                        </p>
                        <div className='flex  w-full  justify-around  '>
                                {/* <div className='flex  justify-end flex-col   w-full'>
                                    <div>&#11044;<span className='px-2'>Aspiring indie hacker</span></div>
                                    <div>&#11044;<span className='px-2'>Full time freelancer</span></div>
                                </div>
                                <div className='flex justify-start flex-col w-full '>
                                    <div>&#11044; <span className='px-2'>B.E. in Computer Engineering</span></div>
                                    <div>&#11044;<span className='px-2'>Avid learner</span></div>
                                
                                </div> */}
                                <div className='flex flex-col '>

                                <li>Aspiring indie hacker</li>
                                <li>Full time freelancer</li>
                                </div>
                                <div className='flex flex-col'>

                                <li>B.E. in Computer Engineering</li>
                                <li>Avid learner</li>
                                </div>
                        </div>
                        <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite </p>
        
                </div>
            </div>
        </div>
    </>
  )
}

export default About