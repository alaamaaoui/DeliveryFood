import React, {ReactNode} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { swicthTab } from '../../action'
import { StateProps } from '../../reducer'

interface NavTabItemProps {
    href: string,
    name: string,
    isActive?: boolean,
    children?: ReactNode
}

const NavTabItem = ({ href, name, children }: NavTabItemProps) => {

    const dispatch = useDispatch()
    const active_tab = useSelector<StateProps, StateProps["active_tab"]>( (state) => state.active_tab)
    
    const onSwicthTab = () => {
        dispatch(swicthTab(name))
    }



    return (
        <li>
            <a
                href={href}
                className={`block text-lg px-4 py-2 rounded-md ${active_tab === name ? 'font-medium bg-amber-100 text-amber-700' : ''}`}
                onClick={onSwicthTab}
            >
                {children}
            </a>
        </li>
    )
}

export default NavTabItem