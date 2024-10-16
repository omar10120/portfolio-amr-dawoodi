import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Save language preference
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
  <>
        {/* Translate Button */}
        <div className='flex justify-center items-center space-x-5 w-full'>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ar')}>arabic</button>
        </div>
  </>
  );
}

export default App;
