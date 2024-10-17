import React, { useState, useEffect } from 'react';
import './About.Module.css'
function About() {
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
        <div id='about' className={` container mx-auto  flex items-center justify-center w-full py-5  ${darkMode == 'false'?'bg-about-body-grey':''} `}><p className={`  rounded-xl p-2 my-10 ${darkMode == 'false'?'bg-about-grey text-black':'bg-tags  text-white '} `}>about me</p> </div>
        <div className={`container mx-auto w-full  flex h-dvh py-8 h-full max-lg:flex-col relative ${darkMode == 'false'?'bg-about-body-grey':''} `}>
            <div class="flex w-1/2 max-lg:w-full  justify-center items-center max-lg:my-12 ">
                <div className=' h-96 w-3/5 max-lg:w-full ' >
                <img className="object-fill h-96 w-96 image max-lg:w-full	" src='https://i.ibb.co/xsg4wXY/IMG-20241014-004521.jpg'/>
                </div>
            </div>
            <div class="flex w-1/2 flex-col justify-center items-center  max-lg:w-full   ">
                <div className={`flex h-auto   flex-col paragraph  w-full text-xl ${darkMode == 'false'? 'text-black': 'text-white'} `}> 
                        <div className='text-2xl font-bold '>Curious about me? Here you have it:</div>
                        
                        <p >I am a passionate designer and programmer specializing in full-stack software development (React.js and Node.js and ASP.Net & C#). I am passionate about bringing the technical and visual aspects of digital products to life. User experience, perfect design, and writing clean, readable, and high-performance code are all important to me.</p>
                        <p>I began my journey as a web developer in 2018, and since then, I have continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my 20s, 4 years after starting my web development journey, I am building cutting-edge web and desktop applications using modern technologies such as C#, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
                        <p>
                            I am a very progressive thinker and enjoy working on products from start to finish, from ideation to development.
                            I have faced many challenges in my software development career, I have received large programs that were not properly hand-over and I have done a good job of improving and addressing the problems that existed correctly.
                        </p>
                        <p>
                        I witness the journey of early-stage startups or just enjoy some down time. You can follow me on LinkedIn where I share tech videos and build publicly, or you can follow me on GitHub.
                        </p>
                        <p>
                        Finally, some quick bits about me: 
                        </p>
                        <div className='flex  w-full  justify-around  '>
                            <div className='flex flex-col '>
                                <li>Aspiring Linked-in</li>
                                <li>Full time freelancer</li>
                            </div>
                            <div className='flex flex-col'>
                                <li>B.E. in Computer Engineering</li>
                                <li>Avid learner</li>
                            </div>
                        </div>
                        <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I won't bite </p>
        
                </div>
            </div>
        </div>
    </>
  )
}

export default About