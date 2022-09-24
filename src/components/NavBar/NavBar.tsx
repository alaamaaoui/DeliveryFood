import React, { ReactNode, Suspense } from "react";

const Logo = React.lazy(() => import('../../shared/LazyComponent/Logo'));
interface NavBarProps {
    children?: ReactNode
}

const NavBar = ({ children }: NavBarProps) => {
    return (
        <nav className='sticky top-0 z-10 bg-white h-[5rem] w-full flex justify-between items-center px-12 py-4 shadow-md'>
            <div className=''>
                <Suspense fallback={<div>Loading ...</div>}>
                    <Logo/>
                </Suspense>
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