import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import logo from '../images/logo/logo-computer.png'
import './Navbar.css'
import { signOut } from 'firebase/auth';
import auth from '../Pages/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
    }
    return (
        <nav style={{ backgroundColor: `${(pathname === '/home' || pathname === '/') ? 'transparent' : '#22c55e'} ` }} className={`navbar flex justify-between items-center`}>
            <Link to='/' className='text-white pl-12 w-32 '><img className='rounded-lg' src={logo} alt="" /></Link>
            <div onClick={() => setOpen(!open)} className='w-10 h-10 md:hidden text-white'>
                {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
            </div>
            <ul className={`flex flex-col md:flex-row justify-end w-full absolute md:sticky duration-300 ease-in pr-12 ${open ? 'top-20' : 'top-[-220px]'}`}>
                <Link className='nav-link mr-4 text-white' to='/home'>Home</Link>
                <Link className='nav-link mr-4 text-white' to='/portfolio'>Our Portfolio</Link>
                <Link className='nav-link mr-4 text-white' to='/team'>Our Team</Link>
                <Link className='nav-link mr-4 text-white' to='/contact'>Contact Us</Link>

                {
                    user ?
                        <Link onClick={logOut} className='nav-link mr-4 text-white' to=''><button className='btn btn-sm btn-accent hover:text-white'>Sign Out</button></Link>
                        :
                        <Link className='nav-link mr-4 text-white' to='/login'><button className='btn btn-sm btn-accent hover:text-white'>Login</button></Link>
                }




            </ul>
        </nav>
    );
};

export default Navbar;