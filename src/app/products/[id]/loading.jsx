import ProductCardSkeleton from '@/components/skeleton/ProductSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <ProductCardSkeleton></ProductCardSkeleton>
        </div>
    );
};

export default loading;