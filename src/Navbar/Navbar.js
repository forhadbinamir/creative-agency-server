import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=''>
            <nav className='navbar bg-transparent py-4 flex justify-between '>
                <div className='w-52 pl-3'>
                    <h2>Hello world</h2>
                </div>
                <div onClick={() => setOpen(!open)} className='w-10 h-10 md:hidden pr-3 text-white '>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`flex flex-col md:flex-row justify-end w-full absolute md:sticky duration-300 ease-in ${open ? 'top-10' : 'top-[-220px]'}`}>
                    <Link to='/home'>Home</Link>
                    <Link to='/portfolio'>Our portfolio</Link>
                    <Link to='/team'>Our Team</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/login'>Login</Link>
                </ul>
            </nav >
        </div >
    );
};

export default Navbar;