import React, { ReactNode } from "react";
import logo from '../../assets/logo.svg'

interface NavBarProps {
    children?: ReactNode
}

const NavBar = ({ children }: NavBarProps) => {
    return (
        <nav className='sticky top-0 z-10 bg-white h-[5rem] w-full flex justify-between items-center px-12 py-4 shadow-md'>
            <div className=''>
            <img src={logo} alt='Logo' width="64" height="64"/>
            </div>
            <div className=''>
                <ul className='flex'>
                    {children}
                </ul>
            </div>
            <div/>
        </nav>
    )
}

export default NavBar