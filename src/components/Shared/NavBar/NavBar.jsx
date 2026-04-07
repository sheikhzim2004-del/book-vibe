import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {

  const links = (
    <>
      <li><NavLink
        to={'/'}
        className={({ isActive }) => isActive ? 'border-2 border-green-500 text-green-500 mr-2' : ''}
      >Home</NavLink></li>
      <li><NavLink
        to={'/books'}
        className={({ isActive }) => isActive ? 'border-2 border-green-500 text-green-500 mr-2' : ''}
      >Listed Books</NavLink></li>
      <li><NavLink
        to={'/pages-to-reed'}
        className={({ isActive }) => isActive ? 'border-2 border-green-500 text-green-500 mr-2' : ''}
      >Pages To Reed</NavLink></li>
    </>
  )


  return (
    <nav className='bg-base-100 shadow-sm'>
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <h2 className="font-bold text-2xl">BookVibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {links}

          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <button className='btn btn-success text-white'>Sign In</button>
          <button className='btn btn-accent text-white'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;