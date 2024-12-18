import React, { useState } from 'react'
import logo from '../../assets/shared/desktop/logo-dark.png'
import { NavLink } from 'react-router-dom'
import { RiMenu3Fill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='w-full lg:w-[1000px] h-[24vh] px-10 lg:px-0 mx-auto flex justify-between items-center'>
      <NavLink to='/' className='logoDiv'>
        <img className='w-[200px]' src={logo} alt='Company Logo' />
      </NavLink>

      {/* Desktop Links */}
      <div className='linkDiv hidden lg:flex uppercase items-center gap-10 text-[#323036] tracking-wider text-[15px]'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `div cursor-pointer hover:underline  ${isActive ? 'underline' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/aboutCompany'
          className={({ isActive }) =>
            `div cursor-pointer hover:underline  ${isActive ? 'underline' : ''}`
          }
        >
          Our Company
        </NavLink>
        <NavLink
          to='/locations'
          className={({ isActive }) =>
            `div cursor-pointer hover:underline  ${isActive ? 'underline' : ''}`
          }
        >
          Locations
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            `div cursor-pointer hover:underline  ${isActive ? 'underline' : ''}`
          }
        >
          Contact
        </NavLink>
      </div>

      <div onClick={toggleMenu} className='lg:hidden'>
        {menuOpen ? (
          <IoClose className='text-[30px] font-bold text-[#323036] cursor-pointer' />
        ) : (
          <RiMenu3Fill className='text-[30px] font-bold text-[#323036] cursor-pointer' />
        )}
      </div>

      {menuOpen && (
        <div>
          {/* Overlay */}
          <div
            onClick={toggleMenu}
            className='fixed inset-0 bg-black opacity-50 z-20'
          ></div>

          <div className='fixed top-0 right-0 h-full w-[70%] bg-[#323036] text-white flex flex-col px-8 py-6 z-30 transition-transform transform translate-x-0 delay-100 duration-500 ease-in-out'>
            <IoClose
              onClick={toggleMenu}
              className='text-[30px] absolute top-4 right-4 cursor-pointer'
            />

            <div className='mt-12 space-y-8'>
              <NavLink
                to='/'
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block text-lg uppercase tracking-wider ${
                    isActive ? 'underline' : ''
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to='/aboutCompany'
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block text-lg uppercase tracking-wider ${
                    isActive ? 'underline' : ''
                  }`
                }
              >
                Our Company
              </NavLink>
              <NavLink
                to='/locations'
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block text-lg uppercase tracking-wider ${
                    isActive ? 'underline' : ''
                  }`
                }
              >
                Locations
              </NavLink>
              <NavLink
                to='/contact'
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block text-lg uppercase tracking-wider ${
                    isActive ? 'underline' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
