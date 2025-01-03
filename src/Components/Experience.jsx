import React, { useState, useEffect } from 'react';

const navigation = [
    { name: 'About', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: true,tech:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' ,year : 'Feb 2021',title: 'Sr.Frontend Developer', info1 :  <li> multiple companies  </li>,info2:<li>Web page development</li>,info3 :<li>Add unique ideas</li>,info4:<li>Working on improving old interfaces in a modern way</li>},
    { name: 'Work', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: false ,tech:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',year : 'Nov 2022',title:'Backend Developer', info1 : <li> Working on developing a pharmacy management program  </li>,info2:<li>Working on developing the program in a distinctive way</li>,info3 :<li>Correct and address errors after studying the project</li>,info4:<li>developing an api and connected with mobile application </li>},
    { name: 'Testmonials', src: 'https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg', current: false ,tech:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',year : 'Aug 2024',title:'Full-Stack  Developer',  info1 : <li>create user authentication method  </li>,info2:<li>create crud operation</li>,info3 :<li>creating APIs to deal with the project </li>,info4:<li>developing the interfaces for the web application </li>},

  ]
function Experience() {

         //start darkmode
         const [darkMode, setDarkMode] = useState(false);
         useEffect(() => {
             // setDarkMode(darkmodeValue)  
             const value = localStorage.getItem('darkMode')  ;
             setDarkMode(value);
         })
         //end darkmode

  return (
    <>
        <div id='Experience' className={`container mx-auto w-full    flex flex-col items-center space-y-12 py-5 ${darkMode == 'false' ? 'text-black bg-about-body-grey' : 'text-white '}  `}>
            <div ><p className={`bg-about-grey  rounded-xl p-2 px-7 ${darkMode == 'false'? 'bg-about-grey' : 'bg-tags'}  `}>Experience</p></div>
            <div className={` text-2xl ${darkMode == 'false'? ' ': 'text-white'}`}>Here is a quick summary of my most recent experience </div>
            <div className='w-full  flex flex-col items-center justify-center space-y-20  '>
            {navigation.map((item) => (
                <div className={`w-3/5  flex h-auto justify-center py-5 max-xl:flex-col max-sm:w-auto max-xl:items-center relative space-x-10  rounded-xl ${darkMode == 'false'?'bg-white':'bg-tags'}`}>
                    {/* <div className='h-full '><img src={item.src} alt="" className='h-12 w-24' /></div> */}
                    {/* <div className='h-full  '><svg height="40" fill={`${darkMode == 'false'?'':'white'}`}   preserveAspectRatio="xMidYMid" viewBox="0 0 512 153" width="100" xmlns="http://www.w3.org/2000/svg"><path d="m140.106589 96.6278184c-8.320937 0-16.117131-3.5232796-23.201172-9.2579795l1.724158-8.0960468.074964-.2998536c1.536749-8.6207906 6.40937-23.0887262 21.40205-23.0887262 11.244509 0 20.390044 9.1455344 20.390044 20.3900439-.037482 11.2070278-9.183017 20.3525622-20.390044 20.3525622zm0-61.3950219c-19.153148 0-33.995901 12.4439239-40.030454 32.9089312-9.2204981-13.8307467-16.192094-30.4351391-20.2775991-44.4158126h-20.6149341v53.6363104c0 10.5698389-8.6207907 19.1906296-19.1906296 19.1906296-10.569839 0-19.1906296-8.6207907-19.1906296-19.1906296v-53.6363104h-20.61493411v53.6363104c-.07496339 21.9642752 17.80380671 39.9929725 39.76808201 39.9929725 21.9642752 0 39.8430454-18.0286973 39.8430454-39.9929725v-8.9956076c4.0105417 8.3584187 8.9206442 16.7918008 14.8802342 24.2881405l-12.6313323 59.3710106h21.1021962l9.145534-43.066472c8.021084 5.134993 17.241582 8.358419 27.811421 8.358419 22.601464 0 41.004978-18.515959 41.004978-41.1174232 0-22.5639824-18.403514-40.9674963-41.004978-40.9674963z" fill="#6fda44"/><path d="m244.043338 37.5566618 13.306003 53.6363104 14.655344-53.6363104h17.466472l-22.526501 77.5121522h-17.466472l-13.830746-53.9736456-13.793265 53.9361636h-17.466472l-22.5265-77.5121519h17.466471l14.655344 53.6363104 13.306003-53.6363104h16.754319zm87.219912-2.3238653c-22.676427 0-41.042459 18.4035139-41.042459 41.0424597 0 22.6764275 18.403514 41.0424598 41.042459 41.0424598 22.676428 0 41.079942-18.3660323 41.079942-41.0424598s-18.403514-41.0424597-41.079942-41.0424597zm0 65.2181555c-13.343484 0-24.138213-10.7947295-24.138213-24.1382141s10.83221-24.1382137 24.138213-24.1382137c13.343485 0 24.138214 10.7947291 24.138214 24.1382137 0 13.3060029-10.794729 24.1382141-24.138214 24.1382141zm90.968082-45.5402639c-11.731771 0-21.214641 9.5203514-21.214641 21.2146413v38.9060026h-17.578916v-77.4746702h17.578916v11.9191801s7.49634-11.9566618 22.901318-11.9566618h5.397364v17.391508zm58.996194 18.3660323c12.481405-7.0465593 20.952269-20.4275257 20.952269-35.7575403h-17.578917c0 12.9311859-10.494875 23.4260615-23.426061 23.4260615h-2.361347v-60.79531481h-17.578917v114.88140521h17.578917v-36.5071739h2.098975c1.724158 0 3.97306 1.124451 4.985066 2.5112738l24.962811 33.9959001h21.064715z"/></svg></div> */}
                    <div className='h-full  '> <img src={item.tech} className='w-8 h-8' alt="" /></div>
                    <div className='flex  flex-col py-1   '>
                        <div className='text-2x1 font-bold '>{item.title}</div>
                        <div className='px-5'>
                            {item.info1}
                            {item.info2}
                            {item.info3}
                            {item.info4}
                        </div>
                        </div>
                    <div className='max-sm:w-full max-sm:flex max-sm:justify-end max-sm:px-12' >{item.year} - Persent</div>
                </div>
            ))}  
            </div>
        </div>
    </>
  )
}

export default Experience