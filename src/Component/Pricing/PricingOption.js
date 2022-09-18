
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../../Benefit/Benefit';

const PricingOption = (props) => {
    const {name, price, benefits}=props.option;
    return (
        <div className='bg-white p-4  text-center rounded-lg'>
            <p className='bg-indigo-300 py-2 text-2xl font-bold'>{name}</p>
            <span className='text-6xl'>{price}</span>
            <span className='text-xl font-bold text-gray-500'>/mo</span>

            <div>
                <h3 className='text-xl font-bold text-left'>Benefits</h3>
               {
                benefits.map(benefit=><Benefit  benefit={benefit}></Benefit>)
               }
            </div>

            <button className='bg-green-500 flex w-full  justify-center py-2 rounded text-white hover:text-green-600'>
                Buy now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;