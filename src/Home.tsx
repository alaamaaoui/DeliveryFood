import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { swicthMenu } from './action';
const Banner = React.lazy(() => import('./shared/LazyComponent/Banner'));

const Home = () => {
        
    const dispatch = useDispatch()

    const onSwitchMenu = () => {
        dispatch(swicthMenu('/order'));
    }

    return (
        <section className='flex h-[calc(100vh-80px)] w-full p-8'>
            <div className='sm:w-full lg:w-1/2 xl:w-1/2 p-8 text-center self-center'>
                <div className='text-5xl text-gray-600 font-semibold mb-5'>Order Tasty And Fresh Food</div>
                <div className='text-5xl text-amber-500 font-semibold mb-5'>Anytime !</div>
                <div className='text-base text-gray-400 font-medium mb-10'>Just confirm your order and enjoy our fastest delivery</div>
                <Link 
                    to={'/order'} 
                    className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={onSwitchMenu}
                >
                    Order Now
                </Link>
            </div>
            <div className='sm:w-full lg:w-1/2 xl:w-1/2 p-8 text-center self-center'>
                <Suspense fallback={<div>Loading ...</div>}>
                    <Banner />
                </Suspense>
            </div>
        </section>
    )
}

export default Home