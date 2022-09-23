import React, {ReactNode} from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from '../../action'

interface NavTabItemProps {
    href: string,
    name: string,
    isActive?: boolean,
    children?: ReactNode
}

const NavTabItem = ({ href, name, isActive, children }: NavTabItemProps) => {

    const dispatch = useDispatch()
    
    const onAddItems = () => {
        switch (name) {
            case "sandwiches":
                dispatch(addItems('sandwiches'))
                break
            case "cakes":
                dispatch(addItems('cakes'))
                break
            default:
                dispatch(addItems('dishes'))
        }
    }



    return (
        <li>
            <a
                href={href}
                className={`block text-lg px-4 py-2 rounded-md ${isActive ? 'font-medium bg-amber-100 text-amber-700' : ''}`}
                onClick={onAddItems}
            >
                {children}
            </a>
        </li>
    )
}

export default NavTabItem