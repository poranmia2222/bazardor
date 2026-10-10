import { Product } from '@/type/type';
import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = async() => {

    const res = await fetch(
            "https://openapi.programming-hero.com/api/bazardor/products",
            {
                next: {
                    revalidate: 3600,
                },
            }
        );
        const data: Product[] = await res.json()

    return (
        <section id="all-products" className='container mx-auto'>
            <header className='mt-16 mb-5'>
                <h2 className='text-3xl font-bold flex gap-2'>সব পণ্য</h2>
                <p className='text-xl'>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
            </header>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default AllProducts;