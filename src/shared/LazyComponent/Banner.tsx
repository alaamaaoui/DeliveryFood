import React from 'react';
import foodBanner from '../../assets/img/food.png'

const Banner = () => {
    return (
        <img src={foodBanner} alt='Home' width='100%' height='100%' className='max-h-[calc(100vh-80px)]'/>
    )
}

export default Banner