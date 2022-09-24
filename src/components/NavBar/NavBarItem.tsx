import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { swicthMenu } from "../../action";
import { StateProps } from "../../reducer";

interface NavItemProps {
    href: string,
    children?: ReactNode
}

const NavBarItem = ({ href, children }: NavItemProps) => {

    const dispatch = useDispatch()
    const active_url = useSelector<StateProps, StateProps["active_url"]>( (state) => state.active_url)

    const onSwitchMenu = () => {
        dispatch(swicthMenu(href));
    }

    return (
        <li>
            <Link 
                to={href} 
                className={`text-xl font-medium px-6 ${active_url === href ? 'text-amber-600' : 'text-gray-800'}`}
                onClick={onSwitchMenu}
            >
                {children}
            </Link>
        </li>
    )
}

export default NavBarItem