import React, {ReactNode} from 'react'

interface NavTabProps {
    children?: ReactNode
}

const NavTab = ({ children }: NavTabProps) => {
    return (
        <nav className="p-4">
            <ul className="flex space-x-2">
                {children}
            </ul>
        </nav>
    )
}

export default NavTab