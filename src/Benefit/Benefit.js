import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Benefit = ({benefit}) => {
    return (
        <div>
             <h1 className='flex items-center mr-2' ><CheckCircleIcon className='w-4 h-4   text-green-500'></CheckCircleIcon>
              {benefit}</h1>
            
        </div>
    );
};

export default Benefit;