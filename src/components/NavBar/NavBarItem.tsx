import React, { ReactNode } from "react";

interface NavItemProps {
    href: string,
    isActive?: boolean,
    children?: ReactNode
}

const NavBarItem = ({ href, isActive, children }: NavItemProps) => {
    return (
        <li>
            <a href={href} className={`text-xl font-medium px-6 ${isActive ? 'text-amber-600' : 'text-gray-800'}`}>
                {children}
            </a>
        </li>
    )
}

export default NavBarItem