import React from 'react';

interface MenuProps {
    path: string,
    name: string
}

export const Menu = ( {path, name}: MenuProps) => {
    return (
        <img src={path} alt={name} className="flex-none w-[150px] h-[150px] rounded-lg object-cover bg-gray-100"/>
    )
}

export default Menu