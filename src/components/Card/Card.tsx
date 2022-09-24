import React from "react";
import { useDispatch } from "react-redux";
import { decrementOrder, incrementOrder, removeOrder } from "../../action";
import trash_icon from '../../assets/icons/trash.svg'
import { ModalPayment } from "../Modal";

interface CardProps {
    order : any
}

const Card = ( {order}: CardProps) => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = React.useState(false);
    
    const name = React.useRef<HTMLInputElement>(null);
    const adress = React.useRef<HTMLInputElement>(null);
    const phone = React.useRef<HTMLInputElement>(null);
    const email = React.useRef<HTMLInputElement>(null);

    const personalInfo = [name, adress, phone, email]

    console.log(order)

    const onRemoveOrder = (menu: any) => {
        dispatch(removeOrder(menu))
    }

    const onDecrementOrder = (menu: any) => {
        dispatch(decrementOrder(menu))
    }

    const onIncrementOrder = (menu: any) => {
        dispatch(incrementOrder(menu))
    }

    const onOpenModal = () => {
        setShowModal(true)
    }

    return (
        <>
            {order[0] && order[0].price ? (
                <div className='relative text-center shadow-lg p-5 m-5 flex-auto divide-y divide-gray-100'>
                    <h1 className='text-gray-700 text-xl font-semibold mb-8'>
                        <span>Order n°</span>
                        <span>{order[0] && order[0].id}</span>
                    </h1>
                    <div className='p-4'>
                        {order[0].menus.map((menu_id:any) => (
                            <div key={menu_id.name} className='mb-5'>
                                <div className='flex items-center justify-between mb-2 font-semibold'>
                                    <div>{menu_id.name}</div>
                                    <div>{menu_id.price.toFixed(3)} DT</div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center">
                                        <button 
                                            className="border-[1px] border-amber-500 text-amber-500 text-base font-semibold p-1 rounded w-6 h-6 flex items-center justify-center"
                                            onClick={()=> onDecrementOrder(menu_id.name)}
                                        >-</button>
                                        <span className="px-3">{menu_id.quantity}</span>
                                        <button 
                                            className="border-[1px] border-amber-500 text-amber-500 text-base font-semibold p-1 rounded w-6 h-6 flex items-center justify-center"
                                            onClick={()=> onIncrementOrder(menu_id.name)}
                                        >+</button>
                                    </div>
                                    <button 
                                        className="flex items-center text-sm text-amber-600 font-normal pl-4 py-2 rounded"
                                        onClick={()=> onRemoveOrder(menu_id.name)}
                                    >
                                        <img src={trash_icon} alt="REMOVE" className="h-4 w-4"/>
                                        <span className="pl-2">REMOVE</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='p-4'>
                        <div className='flex justify-between mb-2 font-semibold'>
                            <div>Total Price</div>
                            <div>{order[0] && order[0].price.toFixed(3)} DT</div>
                        </div>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm my-4 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={onOpenModal}
                        >
                            PROCEED TO PAYMENT
                        </button>
                    </div>
                </div>
            ) : null}
            <ModalPayment 
                title='PERSONAL INFORMATIONS'
                personalInfo={personalInfo}
                order_id={order[0] && order[0].id}
                showModal={showModal}
                setShowModal={setShowModal}            
            >
                <div className="relative p-6 flex-auto">
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
                    <input 
                        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id="name"  
                        type='name'
                        ref={name}
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='adress'>Adress</label>
                    <input 
                        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id="adress"  
                        type='adress'
                        ref={adress}
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>Phone</label>
                    <input 
                        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id="phone"  
                        type='phone'
                        ref={phone}
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                    <input 
                        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id="email"  
                        type='email'
                        ref={email}
                    />
                  </div>
                </div>
            </ModalPayment>
        </>
    )
}

export default Card