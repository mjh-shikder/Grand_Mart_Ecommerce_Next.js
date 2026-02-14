import Products from '@/components/home/Products';
import React from 'react';


export const metadata = {
    title: "All Products",
    description: "Grand Mart"
}

const ProductsPage = () => {
    return (
        <div>
           <Products></Products>
        </div>
    );
};

export default ProductsPage;