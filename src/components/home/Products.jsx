import React from 'react';
import products from "@/data/toys.json";
import ProductCard from '../cards/ProductCart';

const Products = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-secondary mb-10 '>Our Products</h2>
            <div className="grid md:grid-cols-4 gap-5 space-y-5 ">
                {
                    products.map((product) => (
                        <ProductCard key={product.title} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;