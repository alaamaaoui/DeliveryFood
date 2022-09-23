import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../action";
import { StateProps } from "../../reducer";

interface ModalPaymentProps {
    personalInfo: any[],
    children?: ReactNode,
    title: string,
    order_id: number,
    showModal: any,
    setShowModal: any
}

const ModalPayment = ({ personalInfo, children, title, order_id, showModal, setShowModal }: ModalPaymentProps) => {
    
    const orders = useSelector<StateProps, StateProps["orders"]>( (state) => state.orders)

    const dispatch = useDispatch()
    const onUpdateOrder = () => {
        const current_order = orders.filter((order) => order.id === order_id)
        dispatch(updateOrder(personalInfo))
        setShowModal(false)
        alert("Your command has been validated with a total of "+current_order[0].price.toFixed(3)+" DT, we will call you soon !")
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
                                onClick={() => onUpdateOrder()}
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

export default ModalPayment