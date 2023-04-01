import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from '../../images/Logo.png';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(null);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='sticky bg-[#EEAE0D] shadow-sm from-white dark:bg-[#0000] dark:shadow-gray-400 top-0 flex justify-between items-center h-[10vh] max-w-screen mx-auto px-6 md:px-20'>
      <h1 className='hidden  sm:flex hover:text-#CB7EAD bg-[#CB7EAD] cursor-pointer font-mono w-full font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>
       <Link to={'/home'}> Wall-et</Link>
      </h1>
      <img src={logo} alt='logo' className='md:hidden w-22 h-12' />
<div className='hidden max-w-[50%] xl:flex justify-content: space-evenly ;' style={{gap:'5px'}}>
  <button
    className='p-4 cursor-pointer font-semibold hover:text-[#b5abce]  dark:fill-white dark:hover:fill-gray-400 transition-all duration-75 '
    style={{
      whiteSpace: 'nowrap',
      borderRadius: '30%',
      backgroundColor: 'transparent',
      border: 'solid 1.3px #b5abce',
      width: '130px',

gap:'5px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
      
    }}  
    
  >
    <Link to='/'>Inicio</Link>
    </button>
  <button
    className='p-4 cursor-pointer font-semibold hover:text-[#eeae0d] dark:fill-white dark:hover:fill-gray-400 transition-all duration-75'
    style={{
      whiteSpace: 'nowrap',
      borderRadius: '30%',
      backgroundColor: 'transparent',
      border: 'solid 1.3px #8DBF81',
      width: '130px',
gap:'5px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }}
  >
    <Link to='/wallet'>Lo que tengo</Link>
    </button>
  <button
    className='p-4 cursor-pointer font-semibold hover:text-[#eeae0d] dark:fill-white dark:hover:fill-gray-400 transition-all duration-75'
    style={{
      whiteSpace: 'nowrap',
      borderRadius: '30%',
      backgroundColor: 'transparent',
      border: 'solid #FFB347 1.3px',
      width: '130px',
gap:'5px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }}
    >
    <Link to='/transactions'>Historial</Link>
    </button>
  <button
    className='p-4 cursor-pointer font-semibold hover:text-[#eeae0d]bg-[#FF6961] dark:fill-white dark:hover:fill-gray-400 transition-all duration-75'
    style={{
      whiteSpace: 'nowrap',
      borderRadius: '30%',
      backgroundColor: 'transparent',
      border: 'solid 1.3px #FF6961',
      width: '130px',
gap:'5px',
marginRight:'10px',
      overflow: 'clip',
      textOverflow: 'ellipsis'
    }}
    >
    <Link to='/profile'>Yo </Link>
    </button>
    <button
    className='p-4 cursor-pointer text-[#03001C] font-semibold hover:text-[#eeae0d]bg-[#FF6961] dark:fill-white dark:hover:fill-gray-400 transition-all duration-75'
    style={{
      whiteSpace: 'nowrap',
      borderRadius: '30%',
      backgroundColor: 'transparent',
      border: 'solid 1.3px #FF6961',
      width: '130px',
gap:'5px',
      marginLeft:'10px',
      overflow: 'clip',
      textOverflow: 'ellipsis'
    }}
    >Salir</button>

</div>


      <div className='flex flex-end'>
        <DarkModeIcon
          className='mr -2 cursor-pointer text-2xl'
          onClick={handleThemeSwitch}
          />
          <div className='block md:hidden'>
          {nav ? (
          <CloseIcon
                     className='text-2xl cursor-pointer'
                     onClick={handleNav}
                   />
          ) : (
          <MenuIcon
                     className='text-2xl cursor-pointer'
                     onClick={handleNav}
                   />
          )}
          </div>
          </div>

          <div
    className={`${
      nav ? 'block' : 'hidden'
    } md:hidden fixed w-screen h-screen top-0 left-0 bg-white bg-opacity-100`}
  >
    <ul className='text-center pt-24'>
      <li className='NavBarLinks pb-4 text-2xl font-semibold'>
        <Link to='/'  onClick={handleNav}>
          Inicio
        </Link>
      </li>
      <li className='NavBarLinks pb-4 text-2xl font-semibold'>
        <Link to='/wallet' onClick={handleNav}>
          Lo que tengo
        </Link>
      </li>
      <li className='NavBarLinks pb-4 text-2xl font-semibold'>
        <Link to='/transactions' onClick={handleNav}>
          Historial
        </Link>
      </li>
      <li className='NavBarLinks pb-4 text-2xl font-semibold'>
        <Link to='/profile' onClick={handleNav}>
          Yo
        </Link>
      </li>
    </ul>
  </div>
</div>
  )
}