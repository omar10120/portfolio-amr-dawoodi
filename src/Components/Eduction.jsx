import React, { useState, useEffect } from 'react';
const navigation = [
    { name: 'Damascus • School ',year:'JUN 2018', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg',text:'Professional Baccalaureate Degree (information technology).', current: true },
    { name: 'Syrian Virtual University', year:'MAR 2024',src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', text:'branch Bachelor in Information Technology (BAIT) Specialization Information Systems and Data networks (ISDN) ', current: false },
    { name: 'Syrian Virtual University',year:'AUG 2024', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', text:'Master of Web Science (M.Sc. in Web Science).', current: false },

  ]
function Eduction() {

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
            <div ><p className={`${darkMode?'bg-about-grey':'bg-tags text-white'}  rounded-xl p-2 px-7 `}>Eduction</p></div>
            <div className={`text-2xl ${darkMode?'': 'text-white'}`}>Nice Things people have said about me </div>
            {/* <div className='w-full  flex max-xl:flex-col items-start justify-center  space-x-20 max-xl:space-x-0 max-xl:space-y-20  '> */}
            <div className='w-full  flex  flex-col items-start  justify-evenly  space-y-20    '>
            {navigation.map((item) => (
                <div className={`w-full flex-col   justify-center py-5  text-center items-center relative  rounded-xl space-y-5 ${darkMode?'bg-white':'bg-tags text-white'} `}>
                    <div className='w-full items-center flex justify-center '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg></div>
                    <div className={`flex  flex-col py-1  } `}>
                        <div className={`flex  justify-center items-center w-full ${darkMode?'':''}`}>
                          <div className={`w-4/5 text-center }`}>
                           {item.text}
                          </div>
                        </div>
                        </div>
                    <div className='w-full font-bold' >{item.name}</div>
                    <div className='w-full' >{item.year} - Persent</div>
                </div>
            ))}  
            </div>
        </div>
    </>
  )
}

export default Eduction