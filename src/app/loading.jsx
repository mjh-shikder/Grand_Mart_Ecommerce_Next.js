import Logo from '@/components/layouts/Logo';
import React from 'react';

const loading = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">

            <div className="w-48 animate-ping">
            <Logo></Logo>
            </div>
            <h2 className='text-5xl font-semibold mt-10 animate-pulse'>Loading</h2>
      </div>
    );
};

export default loading;