import React from 'react';

const Link = ({route}) => {
    const {link, name}= route;
    return (
        <div className='mr-16'>
         <a className='hover:bg-slate-800 p-1 text-white r' href={link}> {name}</a>
        </div>
    );
};

export default Link;