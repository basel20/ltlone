import React from 'react'
import Logo from '../assets/1.jpg'
import Menu from './menu'
import { FaGlobe, FaLanguage, FaAngleDown, FaAngleUp } from 'react-icons/fa'
// import ModalList from './ModalList';

const Navbar = ({color}) => {

//   const { t, i18n } = useTranslation();
  const [listOpen, setListOpen] = React.useState(false)

    // React.useEffect(() => {
    //   const storedLanguage = localStorage.getItem('language');
    //   if (storedLanguage) {
    //     i18n.changeLanguage(storedLanguage);
    //   }
    // }, [i18n]);

//  const switchLanguage = () => {
//     const currentLanguage = i18n.language;
//     const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';

//     // Store the selected language in localStorage
//     localStorage.setItem('language', newLanguage);
//     i18n.changeLanguage(newLanguage);
//   };;

  const handelList = () => {
    setListOpen(!listOpen)
  }

  return (
    <div>
      <div className='flex justify-between mx-16 items-center h-full md:hidden'>
            <div>
            <img alt='logo' src={Logo} height={'100%'} width={55}/>
            </div>
            <Menu color={color}/>
        </div>

    <div className='h-[5.7rem] hidden md:flex justify-around items-center p-0 m-0'>
      <div >
        <a href='/'>
       <img alt='logo' src={Logo} height={'100%'} width={75}/>
       </a>
      </div>

      <div className={`flex gap-8 list-none text-xl font-medium text-[${color}] coursor-pointer`}>
        <a href='/' className='hover:text-[#FFD700]'>Home</a>
        <a href='/about' className='hover:text-[#FFD700]'>About</a>
        <a href='/products' className='hover:text-[#FFD700]'>Products</a>
        
        {/* <a href='/contact' className='hover:text-[#FFD700]'>Contact</a> */}
        <button
          className=" rounde "
          aria-label="Switch Language"
        >
          <FaGlobe color={color} className='hover:text-[#FFD700] h-6 w-6'/>
        </button>
        
      </div>
    </div>

    </div>
  )
}

export default Navbar
