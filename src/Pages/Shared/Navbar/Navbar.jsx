import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import psycologistIcon from '../../../Component/Images/download.webp'
import "./Navbar.css"
const Navbar =({ handleThemeChange, theme })=>{
    const menuItems = 
    <>
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/appointment">Appointment</NavLink></li>
        <li><NavLink to="/psycologist">Psycologist</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
    </>
    return(
        <div class="navbar fixed bg-opacity-30 top-0 w-full z-50 lg:px-10 bg-base-100 text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-1/12 h-1/12 pointer-events-auto cursor-pointer' src={psycologistIcon} alt="" />
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-compact menu-horizontal p-0 text text-medium font-semibold">
                    {menuItems}
                </ul>
            </div>
            <button onClick={handleThemeChange} className='btn btn-ghost'>
                {theme ? (<><svg aria-hidden="true" id="theme-toggle-light-icon" class="w-5 h-5 day-mode" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></>) : (<><svg aria-hidden="true" id="theme-toggle-dark-icon" class="w-5 h-5 day-mode" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg></>)}
            </button>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>

        </div>
    );
};
export default Navbar;

