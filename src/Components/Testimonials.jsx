import React, { useState, useEffect } from 'react';
const navigation = [
    { name: 'About', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: true },
    { name: 'Work', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: false },
    { name: 'Testmonials', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: false },

  ]
function Testimonials() {

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
        <div id='Testimonials' className={`container mx-auto w-full    flex flex-col items-center space-y-12 py-5 text-xl  ${darkMode?'bg-about-body-grey':''} `}>
            <div ><p className={`${darkMode?'bg-about-grey':'bg-tags text-white'}  rounded-xl p-2 px-7 `}>Testimonials</p></div>
            <div className={`text-2xl ${darkMode?'': 'text-white'}`}>Nice Things people have said about me </div>
            <div className='w-full  flex max-xl:flex-col items-center justify-center space-x-20 max-xl:space-x-0 max-xl:space-y-20  '>
            {navigation.map((item) => (
                <div className={`w-full flex-col   justify-center py-5  text-center items-center relative  rounded-xl space-y-5 ${darkMode?'bg-white':'bg-tags text-white'} `}>
                    {/* <div className='w-full items-center flex justify-center '><img src={item.src} alt="" className='h-12 w-24' /></div> */}
                    <div className='w-full items-center flex justify-center '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg></div>
                    
                    <div className={`flex  flex-col py-1  ${darkMode?'':''} `}>
                        <div className={`flex  justify-center items-center w-full ${darkMode?'':''}`}>
                          <div className={`w-4/5 text-start ${darkMode?'':''}`}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elitdsadw
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitdsadwq
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitdaw
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitdaweqwew"
                          </div>
                        </div>
                        </div>
                    <div className='w-full' >John Doe</div>
                    <div className='w-full' >Nov 2021 - Persent</div>
                </div>
            ))}  
            </div>
        </div>
    </>
  )
}

export default Testimonials