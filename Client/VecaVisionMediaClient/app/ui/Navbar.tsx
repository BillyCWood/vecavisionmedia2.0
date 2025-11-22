"use client";
import React, { useState } from "react";
import { NavLink, Link } from "react-router";


export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    
    return(
        <div>
            { /*  Desktop Navigation */ }
            <div className="hidden lg:flex bg-black/50 backdrop-blur-md border-b border-white/50 justify-evenly items-center lg:px-24 xl:px-72">

                <Link to={'/'} className="group flex items-center">
                    <img src="/VVM-images/Veca-Vision2.png" className="m-0 p-0 group-hover:grayscale group-hover:ease-in-out group-hover:duration-300" width={75} height={75} alt="Veca Vision Media Logo" />
                    <span className="group-hover:text-vvm-lightblue group-hover:ease-in-out group-hover:duration-300">Veca Vision Media</span>
                </Link>

                <NavLink to={'/services'} className={({ isActive }) => isActive ? 'link text-vvm- hover:text-vvm-teal after:bg-vvm-teal' : 'link hover:text-vvm-teal after:bg-vvm-teal'}>Services</NavLink>
                <NavLink to={'/portfolio'} className={({ isActive }) => isActive ? 'link text-vvm-lightblue hover:text-vvm-lightblue after:bg-vvm-lightblue' : 'link hover:text-vvm-lightblue after:bg-vvm-lightblue'}>Portfolio</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'link text-vvm-blue hover:text-vvm-blue after:bg-vvm-blue' : 'link hover:text-vvm-blue after:bg-vvm-blue'}>About</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'link text-vvm-pink hover:text-vvm-pink after:bg-vvm-pink' : 'link hover:text-vvm-pink after:bg-vvm-pink'}>Contact</NavLink>
            </div>


            { /*  Mobile Navigation */ }
            <div className="flex lg:hidden sticky top-0 bg-black border-b border-white px-6 justify-between">
                <Link to={'/'} className="flex items-center ease-in-out duration-300">
                    <img src="/VVM-images/Veca-Vision2.png" className="m-0 p-0" width={75} height={75} alt="Veca Vision Media Logo" />
                </Link>
                <button className={`hover:cursor-pointer ${ isOpen ? 'space-y-0 content-center' : 'space-y-2 content-center' }`} onClick={ () => setIsOpen(!isOpen) }>
                    <span className={`block w-6 border-b ${ isOpen ? 'rotate-225 duration-500' : 'rotate-0 duration-500' }`} />
                    <span className={`block w-6 border-b ${ isOpen ? '-rotate-225 duration-500 -translate-y-px' : 'rotate-0 duration-500' }`} />
                </button>
            </div>
            <div className={`lg:hidden w-screen float-right bg-black ${ isOpen ? 'flex flex-col' : 'hidden' }`}>
                <NavLink to={'/services'} className={({ isActive }) => isActive ? 'mobile-link text-vvm-teal border-vvm-teal' : 'mobile-link border-vvm-teal'} onClick={() => setIsOpen(!isOpen)}>Services</NavLink>
                <NavLink to={'/portfolio'} className={({ isActive }) => isActive ? 'mobile-link text-vvm-lightblue border-vvm-blue' : 'mobile-link border-vvm-blue'} onClick={() => setIsOpen(!isOpen)}>Portfolio</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'mobile-link text-vvm-blue border-vvm-pink' : 'mobile-link border-vvm-pink'} onClick={() => setIsOpen(!isOpen)}>About</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'mobile-link text-vvm-pink border-white' : 'mobile-link border-white'} onClick={() => setIsOpen(!isOpen)}>Contact</NavLink>
            </div>
        </div>
    )
}
