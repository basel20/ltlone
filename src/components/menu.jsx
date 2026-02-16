import React from 'react';
import { FaBars, FaGlobe  } from 'react-icons/fa';

const Menu = ({ color }) => {
  const [isOpen, setIsOpen] = React.useState(false);
//   const { t, i18n } = useTranslation();

//   // Retrieve the saved language from localStorage on component mount
//    React.useEffect(() => {
//     const storedLanguage = localStorage.getItem('language');
//     if (storedLanguage) {
//       i18n.changeLanguage(storedLanguage);
//     }
//   }, [i18n]);

//   const switchLanguage = () => {
//     const currentLanguage = i18n.language;
//     const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';

//     // Store the selected language in localStorage
//     localStorage.setItem('language', newLanguage);
//     i18n.changeLanguage(newLanguage);
//   };



  return (
    <div>
      <button className='h-10 w-10' onClick={() => setIsOpen(!isOpen)}>
        <FaBars size='30px' color={color} />
      </button>

      {isOpen && (
        <div className='absolute bg-[#184e77] text-white left-0 w-full h-[100vh] text-lg z-50 -mt-16 flex flex-col gap-8 justify-center items-center'>
          <span
            className='absolute top-10 right-16 h-8 w-8 cursor-pointer rounded-full border-2 border-white flex items-center justify-center'
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </span>

          <div className='flex flex-col gap-8 justify-center items-center'>
            <a href='/' className='hover:text-[#FFD700]'>Home</a>
            <a href='/about' className='hover:text-[#FFD700]'>About</a>
            <a href='/developments' className='hover:text-[#FFD700]'>Developments</a>
            <a href='/contact' className='hover:text-[#FFD700]'>Contact</a>

            <button
              // onClick={switchLanguage}
              className='rounded'
              aria-label='Switch Language'
            >
              <FaGlobe color={'#fff'} className='hover:text-[#FFD700] h-6 w-6' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
