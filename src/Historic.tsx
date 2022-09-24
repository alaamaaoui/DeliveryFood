import React from 'react';
import { useSelector } from 'react-redux';
import { StateProps } from './reducer';

const Historic = () => {

    const orders = useSelector<StateProps, StateProps["orders"]>( (state) => state.orders)  

    return (
        <section className='flex flex-wrap h-full w-full p-8 justify-evenly'>
            {orders.map((order) => (
                <>
                    {order.price ? (
                        <div className='sm:w-full lg:w-2/5 xl:w-2/5 relative text-center shadow-lg p-5 m-5 divide-y divide-gray-100'>
                            <div className='p-4'>
                                <div className={`absolute top-4 right-4 font-semibold border-[1px] px-3 py-1 rounded-xl bg-opacity-10 ${order.status === 'done' ? 'bg-green-400 border-green-600 text-green-600' : 'bg-orange-400 border-orange-600 text-orange-600'}`}>
                                    {order.status === 'done' ? 'Done' : 'In Progress'}
                                </div>
                                <div className='flex mb-2'>
                                    <div>Order n° : </div>
                                    <div className='ml-1 font-semibold'>{order.id}</div>
                                </div>
                                <div className='flex mb-2'>
                                    <div>Date : </div>
                                    <div className='ml-1 font-semibold'>{order.date}</div>
                                </div>
                                <div className='flex mb-2'>
                                    <div>Name : </div>
                                    <div className='ml-1 font-semibold'>{order.name}</div>
                                </div>
                                <div className='flex mb-2'>
                                    <div>Adress : </div>
                                    <div className='ml-1 font-semibold'>{order.adress}</div>
                                </div>
                                <div className='flex mb-2'>
                                    <div>Total Price : </div>
                                    <div className='ml-1 font-semibold'>{order.price.toFixed(3)} DT</div>
                                </div>
                            </div>
                            <div className='p-4'>
                                {order.menus.map((menu_id:any) => (
                                    <div key={menu_id.name} className='mb-2'>
                                        <div className='flex items-center justify-between'>
                                            <div>{menu_id.quantity}x {menu_id.name}</div>
                                            <div className='font-semibold'>{menu_id.price.toFixed(3)} DT</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </>
            ))}
            
        </section>
    )
}

export default Historic