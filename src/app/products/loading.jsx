import ProductCardSkeleton from '@/components/skeleton/ProductSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid md:grid-cols-4 gap-5 space-y-5'>
            {
                [...Array(8)].map((_, index) => (
                    <ProductCardSkeleton key={index}></ProductCardSkeleton>
                ))
            }
        </div>
    );
};

export default loading;