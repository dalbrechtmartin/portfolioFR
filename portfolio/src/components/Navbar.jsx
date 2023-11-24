import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { NavLinks, navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} >
      {/* LINKS CONTAINER */}
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        {/* Logo */}
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            {/* Scroll to the top of the page */ }
            window.scrollTo(0, 0);
          }} >
          <img src={logo}
            alt="logo"
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> Danaé &nbsp;
            <span className='sm:block hidden'> |&nbsp; Développeuse</span>
          </p>
        </Link>
        {/* Links */}
        <ul 
          className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li 
              key={Link.id} 
              className={`${
                active === Link.title 
                ? "text-white" 
                : "text-secondary"
                } hover:text-white text-[18px] 
                font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
            >
              {/* TODO: https://www.youtube.com/watch?v=0fYi8SGA20k&t=2044s */}
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} 
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            {/* Links */}
            <ul 
              className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li 
                  key={Link.id} 
                  className={`${
                    active === Link.title 
                    ? "text-white" 
                    : "text-secondary"
                    } hover:text-white text-[16px] 
                    font-poppins font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title);
                    }}
                >
                  {/* TODO: https://youtu.be/0fYi8SGA20k?si=tTyEo5ptr9x0ZXZn&t=2270 */}
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* END OF LINKS CONTAINER */}
    </nav>
  )
}

export default Navbar