
import React, {useState} from 'react';
import {HiMenuAlt3, HiX} from 'react-icons/hi';
import {Logo} from '../constants/images';
import { navLinks } from '../constants';


const Navbar = () => {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(true);

  return (
    <nav className='w-full flex justify-between items-center py-6'>
      <img className='w-[140px] h-[28px]'
        src={Logo}
        alt="logo" />

      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((link,index) => (
          <li className={`font-poppins font-normal cursor-pointer text-[16px] mx-5 ${active === link.id ? 'text-yellow' : 'text-secondary'}`}
            key={link.id}
            onClick={() => setActive(link.id)}>
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='border-l-2 border-yellow px-5 sm:flex hidden'>
          <p className='uppercase font-poppins font-semibold cursor-pointer text-[18px] mx-5 text-secondary'>
            Subscribe
          </p>
      </div>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {toggle ? <HiMenuAlt3 className="w-[28px] h-[28px] object-contain text-secondary"
          onClick={() => setToggle(!toggle)}/> : <HiX className="w-[28px] h-[28px] object-contain text-secondary"
          onClick={() => setToggle(!toggle)}/> }

        <div className={`${toggle ? 'hidden' : 'flex'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] 
                ${active === nav.id ? "text-yellow" : "text-secondary"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => (
                  setToggle(!toggle),
                  setActive(nav.id))}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar