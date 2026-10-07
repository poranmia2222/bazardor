import { Product } from '@/type/type';
import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = async() => {

    const res = await fetch(
            "https://api.api-store.workers.dev/api/bazardor/products",
            {
                next: {
                    revalidate: 3600,
                },
            }
        );
        const data: Product[] = await res.json()

    return (
        <section className='container mx-auto'>
            <header className='mt-16 mb-5'>
                <h2 className='text-3xl font-bold flex gap-2'>সব পণ্য</h2>
                <p className='text-xl'>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
            </header>
            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default AllProducts;