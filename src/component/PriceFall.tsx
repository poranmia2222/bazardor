import { Product } from '@/type/type';
import React from 'react';
import ProductCard from './ProductCard';
import { TiArrowSortedDown } from 'react-icons/ti';

const PriceFall = async () => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
            next: {
                revalidate: 3600,
            },
        }
    );
    const data: Product[] = await res.json()
    const priceUpProducts = data
        .filter(item => item.change.dir === "down")
        .sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);
    console.log(priceUpProducts)

    return (
        <section className='container mx-auto'>
            <header className='my-5'>
                <h2 className='text-3xl font-bold flex gap-2'><span className='text-green-600'><TiArrowSortedDown /></span> আজ দাম কমেছে</h2>
            </header>
            <div className='grid grid-cols-3 gap-4'>
                {
                    priceUpProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default PriceFall;