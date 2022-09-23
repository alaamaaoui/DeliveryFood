import React from 'react'
import { useSelector } from 'react-redux'
import order_icon from '../../assets/icons/order.svg'
import { StateProps } from '../../reducer'
import { ModalOrder } from '../Modal'

interface NavItemProps {
    id: string,
    image: string,
    name: string,
    description: string,
    price: number,
    children?: any
}

const ListItem = (props : any) => {
    var items = props.items
    const [showModal, setShowModal] = React.useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState(false);
    const quantity = React.useRef<HTMLInputElement>(null);
    const description = React.useRef<HTMLTextAreaElement>(null);
    const orders = useSelector<StateProps, StateProps["orders"]>( (state) => state.orders)

    const onOpenModal = (menu: any) => {
        if(orders.filter((order) => order.status === 'in_progress')[0] && orders.filter((order) => order.status === 'in_progress')[0].menus.filter((order: any) => order.name === menu).length)
            alert(menu.concat(" has already been ordered !"))
        else{
            setShowModal(true)
            setSelectedMenu(menu)
        }
    }

    return (
        <>
            {items.map((item: NavItemProps) => (
                <li key={item.name}>
                    <article className='relative p-4 flex space-x-4'>
                        <img src={item.image} alt={item.name} className="flex-none w-[150px] h-[150px] rounded-lg object-cover bg-gray-100"/>
                        <div className="min-w-0 flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                            <h2 className='text-lg text-black font-semibold mb-1'>
                                {item.name}
                            </h2>
                            <div className='mb-2'>
                                {item.description}
                            </div>
                            <div className='mb-1'>
                                <button
                                    className="flex items-center text-sm text-amber-600 font-normal pl-4 py-2 rounded"
                                    onClick={()=>{onOpenModal(item.name)}}>
                                    <img src={order_icon} alt="Order" className="h-5 w-5"/>
                                    <span className="pl-2">ADD TO ORDER</span>
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-2 right-4 rounded-md bg-amber-50 text-amber-900 text-lg font-medium px-2 py-1 space-x-1">
                            <span>{item.price.toFixed(3)} DT</span>
                        </div>
                    </article>
                </li>
            ))}
            <ModalOrder title='ORDER' quantity={quantity} description={description} selectedMenu={selectedMenu} showModal={showModal} setShowModal={setShowModal}>
                <div className="relative p-6 flex-auto">
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='quantity'>Quantity</label>
                    <input 
                        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id="quantity"
                        defaultValue="1"  
                        type='number' 
                        min='1'
                        ref={quantity}
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>Description</label>
                    <textarea 
                        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id="description"
                        placeholder='Do you have a special order?' 
                        ref={description} 
                    />
                  </div>
                </div>
            </ModalOrder>
        </>
    )
}

export default ListItem