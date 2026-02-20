import React from 'react'
import Logo from '../assets/logo.png'
import Menu from './menu'
import { FaGlobe, FaLanguage, FaAngleDown, FaAngleUp } from 'react-icons/fa'
//import ModalList from './ModalList';
import { useTranslation } from 'react-i18next';
import '../configs/i18n'; 

const Navbar = ({color}) => {

  const { t, i18n } = useTranslation();
  const [listOpen, setListOpen] = React.useState(false)

    React.useEffect(() => {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        i18n.changeLanguage(storedLanguage);
      }
    }, [i18n]);

 const switchLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';

    // Store the selected language in localStorage
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage);
  };;

  const handelList = () => {
    setListOpen(!listOpen)
  }

  return (
    <div>
      <div className='flex justify-between mx-8 sm:px-20 items-center h-full md:hidden'>
            <div>
            <img alt='logo' src={Logo} height={'100%'} width={100}/>
            </div>
            <Menu color={color}/>
        </div>

    <div className='h-[5.7rem] hidden md:flex justify-between px-20 items-center p-0 m-0'>
      <div >
        <a href='/'>
       <img alt='logo' src={Logo} height={'100%'} width={150}/>
       </a>
      </div>

      <div className={`flex gap-8 list-none text-xl font-medium text-[${color}] coursor-pointer`}>
        <a href='/' className='hover:text-[#FFD700]'>{t("Home")}</a>
        <a href='/about' className='hover:text-[#FFD700]'>{t("About")}</a>
        <a href='/products' className='hover:text-[#FFD700]'>{t("Products")}</a>
        
        {/* <a href='/contact' className='hover:text-[#FFD700]'>Contact</a> */}
        <button
          className=" rounde "
          aria-label="Switch Language"
          onClick={switchLanguage}
        >
          <FaGlobe color={color} className='hover:text-[#FFD700] h-6 w-6'/>
        </button>
        
      </div>
    </div>

    </div>
  )
}

export default Navbar
