import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from '../../images/Logo.png';

export const  NavbarD = () => {
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
    <div className='sticky bg-slate-100 shadow-sm from-white dark:bg-[#0000] dark:shadow-gray-400 top-0 flex justify-between items-center h-[10vh] max-w-screen mx-auto px-6 md:px-20'>
      <h1 className='hidden  sm:flex hover:text-#CB7EAD bg-[#CB7EAD] cursor-pointer font-mono w-full font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>
       <Link to={'/'}> Wall-et </Link>
      </h1>
      <Link to={'/'}>   <img src={logo} alt='logo' className='md:hidden w-22 h-12 pr-4' /></Link>
<div className='hidden max-w-[50%] xl:flex justify-content: space-evenly ;' style={{gap:'5px'}}>
<Link to='/login/niñxs'> <button
    className='p-4 cursor-pointer dark:fill-white text-white font-semibold dark:text-white hover:text-gray-700 dark:hover:fill-gray-400 transition-all duration-75'
    style={{
      whiteSpace: 'nowrap',
      borderRadius: '10%',
      color: '#FFB347',
      width: '100px',
      gap:'5px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
      >
      Iniciar sesión
      </button></Link>
      <Link to='/register/niñxs'> <button
      className='p-4 cursor-pointer dark:fill-white text-white font-semibold dark:text-white hover:text-gray-700 dark:hover:fill-gray-400 transition-all duration-75'
      style={{
      whiteSpace: 'nowrap',
      borderRadius: '10%',
      color: '#FFB347',
      width: '100px',
      gap:'5px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
    Registrarme
    </button></Link>
  

</div>


      <div className='flex flex-end space-x-4 sm:pl-8'>
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
    } md:hidden fixed w-screen h-screen top-0 left-0 bg-white dark:bg-[#2A2B2A] bg-opacity-100`}
  >
    <ul className='text-center pt-24 dark:bg-[#2A2B2A] dark:text-white '>
    
      <li className='NavBarLinks pb-4 text-2xl font-semibold'>
        <Link to='/wallet' onClick={handleNav}>
          Inicio
        </Link>
      </li>
      <li className='NavBarLinks pb-4 text-2xl font-semibold'>
        <Link to='/login/niñxs' onClick={handleNav}>
          Ingresar
        </Link>
      </li>
      <li className='NavBarLinks pb-4 text-2xl font-semibold'>
        <Link to='/register/niñxs' onClick={handleNav}>
          Registrarme
        </Link>
      </li>
    </ul>
  </div>
</div>
  )
}