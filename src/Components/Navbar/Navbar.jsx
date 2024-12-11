import React from 'react';
import logo from "../../assets/shared/desktop/logo-dark.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-[1000px] h-[24vh] mx-auto flex justify-between items-center'>
            <Link to={"/"} className="logoDiv">
                <img className='w-[200px]' src={logo} alt="" />
            </Link>

            <div className="linkDiv uppercase flex items-center gap-10 text-[#323036] tracking-wider text-[15px]">
                <Link to={"/aboutCompany"} className="div hover:underline cursor-pointer">
                    Our Company
                </Link>
                <Link to={"/locations"} className="div hover:underline cursor-pointer">
                    Locations
                </Link>
                <div className="div hover:underline cursor-pointer">
                    Contact
                </div>
            </div>
        </div>
    );
};

export default Navbar;