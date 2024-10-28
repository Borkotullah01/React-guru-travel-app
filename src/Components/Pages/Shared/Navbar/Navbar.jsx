import React, { useContext } from 'react';
import logo from "./../../../../assets/logo.png";
import { FiSearch } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    // console.log(user.email);

    const navLink = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/destination"}>Destination</NavLink></li>
    <li><NavLink to={"/blog"}>Blog</NavLink></li>
    <li><NavLink to={"/contact"}>Contact</NavLink></li>
    <li><NavLink to={"/top"}>Top Rated</NavLink></li>
    </>

    return (
      <div className="fixed w-full z-50 text-[#FFFFFF] bg-[#2220267c]">
        <div className="navbar w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLink}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl">
          <img src={logo} alt="" className='h-[45px]' />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-2 menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {/* user information  */}
        <Link className='capitalize'>{user?.displayName}</Link>
        {user ? <Link to={"/login"} onClick={logOut} className="btn px-8 bg-[#F9A51A]">Logout</Link> : <Link to={"/login"} className="btn px-8 bg-[#F9A51A]">Login</Link>}
      </div>
      </div>
      </div>
    );
};

export default Navbar;