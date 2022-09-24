import React from 'react';
import { NavTab, NavTabItem } from './components/NavTab';
import { List, ListItem } from './components/List';
import { useSelector } from 'react-redux';
import { StateProps } from './reducer';
import { Card } from './components/Card';

const Order = () => {
    const dishes = useSelector<StateProps, StateProps["dishes"]>( (state) => state.dishes)
    const sandwiches = useSelector<StateProps, StateProps["sandwiches"]>( (state) => state.sandwiches)
    const cakes = useSelector<StateProps, StateProps["cakes"]>( (state) => state.cakes)
    const orders = useSelector<StateProps, StateProps["orders"]>( (state) => state.orders)  
    const items = useSelector<StateProps, StateProps["items"]>( (state) => state.items)

    /*const onSwitchTab = (name) => {
        dispatch(swicthTab(name));
    }*/

    return (
        <section className='flex h-full w-full p-8'>
            <div className='sm:w-full lg:w-1/2 xl:w-1/2'>
                <NavTab>
                    <NavTabItem href="#" name='dishes'>
                        Dishes
                    </NavTabItem>
                    <NavTabItem href="#" name='sandwiches'>
                        Sandwiches
                    </NavTabItem>
                    <NavTabItem href="#" name='cakes'>
                        Cakes
                    </NavTabItem>
                </NavTab>
                <List>
                    <ListItem items={items === 'sandwiches' ? sandwiches : (items === 'cakes' ? cakes : dishes)}/>
                </List>
            </div>
            <div className='sm:w-full lg:w-1/2 xl:w-1/2 fixed right-0 overflow-y-auto max-h-[calc(100vh-80px)]'>
                <Card order={orders.filter(order => order.status === 'in_progress')}/>
            </div>
        </section>
    )
}

export default Order