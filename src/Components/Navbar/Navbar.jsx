import React from 'react';
import logo from '../../assets/shared/desktop/logo-dark.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-[1000px] h-[24vh] mx-auto flex justify-between items-center">
      <NavLink to="/" className="logoDiv">
        <img className="w-[200px]" src={logo} alt="Company Logo" />
      </NavLink>

      <div className="linkDiv uppercase flex items-center gap-10 text-[#323036] tracking-wider text-[15px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `div cursor-pointer hover:underline  ${isActive ? 'underline' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutCompany"
          className={({ isActive }) =>
            `div cursor-pointer hover:underline  ${isActive ? 'underline' : ''}`
          }
        >
          Our Company
        </NavLink>
        <NavLink
          to="/locations"
          className={({ isActive }) =>
            `div cursor-pointer hover:underline  ${isActive ? 'underline' : ''}`
          }
        >
          Locations
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `div cursor-pointer hover:underline  ${isActive ? 'underline' : ''}`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
