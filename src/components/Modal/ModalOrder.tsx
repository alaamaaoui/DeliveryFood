import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, createOrder } from "../../action";
import { StateProps } from "../../reducer";

interface ModalOrderProps {
    quantity: any,
    description: any,
    children?: ReactNode,
    title: string,
    selectedMenu: any,
    showModal: any,
    setShowModal: any
}

const ModalOrder = ({ quantity, description, children, title, selectedMenu, showModal, setShowModal }: ModalOrderProps) => {

      
    const dishes = useSelector<StateProps, StateProps["dishes"]>( (state) => state.dishes)
    const sandwiches = useSelector<StateProps, StateProps["sandwiches"]>( (state) => state.sandwiches)
    const cakes = useSelector<StateProps, StateProps["cakes"]>( (state) => state.cakes)
    const items = useSelector<StateProps, StateProps["items"]>( (state) => state.items)
    const orders = useSelector<StateProps, StateProps["orders"]>( (state) => state.orders)

    const menus = items === 'sandwiches' ? sandwiches : (items === 'cakes' ? cakes : dishes)

    const dispatch = useDispatch()
    const onAddOrder = (selectedMenu: any) => {
        if(!(orders.filter((order) => order.status === 'in_progress')).length){
            var order = {
                date: '',
                id: ((orders.filter((order) => order.status === 'valid'))[orders.length-1] && (orders.filter((order) => order.status === 'valid'))[orders.length-1].id+1) || 1,
                name: '',
                adress: '',
                phone: '',
                email: '',
                price: 0,
                status: 'in_progress',
                menus: []
            }
            dispatch(createOrder(order))
        }
        const menu = menus.filter((item) => item.name === selectedMenu)[0]
        const item = {
            name: menu.name,
            price: menu.price,
            quantity: quantity.current.value || 1,
            description: description.current.value,
        }
        dispatch(addOrder(item))
        setShowModal(false)
    }

    return (
        <>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto min-w-[40%] max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold">
                                {title}
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            {children}
                            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => onAddOrder(selectedMenu)}
                            >
                                Save
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default ModalOrder