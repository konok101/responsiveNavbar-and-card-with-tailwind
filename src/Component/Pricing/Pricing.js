import React from 'react';
import PricingOption from './PricingOption';

const Pricing = () => {

    const pricingOptions = [
        { id: 1, name: 'free', price: 0 , benefits:[
            'lifetime free', 'unlimited free', 'located defaults','fantastic deals','crazy deals'
        ] },
        { id: 2, name: ' REgular', price: 3.4, benefits:[
            'lifetime free', 'unlimited free', 'located defaults','fantastic deals','crazy deals'
        ] },
        { id: 3, name: ' Premium', price: 5.9, benefits:[
            ' Everything on regular', 'unlimited free', 'located defaults','fantastic deals','crazy deals'
        ] },
    ]
    return (
        <div className='mt-9 p-3 bg-indigo-200 '>
            <h1 className='text-6xl font-mono text-white'>Best Deals of town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vitae eius voluptate debitis a ipsam officia dolorum? Sunt, quod ut dicta a mollitia aut laboriosam asperiores magnam suscipit perspiciatis accusamus.</p>
         <div className='grid md:grid-cols-3 gap-3 mt-5 rounded-lg'>
         {
                pricingOptions.map(option => <PricingOption option={option} key={option.id}></PricingOption>)
            }
         </div>
        </div>
    );
};

export default Pricing;