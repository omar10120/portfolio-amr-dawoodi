
import './Header.Module.css'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';



 const Header = ({}) => {
    const { t, i18n } = useTranslation();

    //start darkmode
    const [darkMode, setDarkMode] = useState(false);
    const [langue, setlangue] = useState('');
    useEffect(() => {

        const value = localStorage.getItem('darkMode')=== 'false' ;
        const lang = localStorage.getItem('language');
        setlangue(lang);
        setDarkMode(value);
    })
    //end darkmode
   
  return (
    <>
    
    
    <div className={`container mx-auto  flex h-96 max-sm:h-auto  max-sm:flex-col-reverse ${langue == 'ar' ? 'flex-row-reverse': ''}  ${darkMode ? 'bg-white':'bg-darker text-white'} `}>
        <div className={`flex w-2/3  flex-col justify-around max-sm:w-full max-sm:justify-center max-sm:py-5 ${langue == 'ar'? 'text-right': ''}  `} >
            <div>
                <h1 className={`text-3xl font-bold my-1   `}>
                {t('welcome')}
                    
                </h1>
                <p className='text-xl'>{t('about')}</p>
            </div>
            <div >

                <div className={`flex py-2 items-center ${langue == 'ar'?'justify-end':''}`}>
                    <svg className={`h-6 w-6 text-gray-800 ${darkMode? 'text-grey-800':'text-white'} `}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <p className='mx-2 text-xl  '>{t('location')} </p>
                </div>
                <div className={`flex ${langue == 'ar'?'justify-end':''}  `}>
                    <svg class="h-6 w-6 text-green-800 flex mt-1.5  "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" fill='green' cy="9" r="6" /></svg> <p className='mx-2  text-xl '>{t('accessible')}</p>
                </div>
            </div>
            <div className={`container mx-auto flex w-full p-0 max-sm:py-5 ${langue == 'ar'?'justify-end':''}	`}>
                <div className={`flex w-32 justify-around  ${langue== 'ar'? 'flex-row-reverse': ''} `}>
                    <a target='_blank' href="https://github.com/omar10120/"> <svg viewBox="0 0 128 128" className='w-8 h-8'><g fill={darkMode?'#181616':'white'}><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g></svg></a>
                    <a target='_blank' href="https://www.facebook.com/amr.dawode.7"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" className="h-8 w-8" /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/omar-dawoodi-65044b201/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="h-8 w-8"/></a>
                </div>
            </div>
        </div>
        <div class="flex w-1/3 max-sm:w-full  justify-center items-center max-sm:my-12  ">
            <div className=' h-48 w-3/5' >
              <img className="object-fill h-48 w-96  image	" src='https://i.ibb.co/w6f3rQz/IMG-20241013-184915.jpg'/>
            </div>

        </div>
    </div>

    </>
  );
};

export default Header;


