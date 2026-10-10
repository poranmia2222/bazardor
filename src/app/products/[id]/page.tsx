import { connection } from 'next/server';
import ProductDetails from '@/component/ProductDetails';
import React from 'react';

interface Props {
    params: Promise<{ id: string }>;
}
const ProductDetailsPage = async({ params }: Props) => {
    await connection();
    return (
        <div>
            <ProductDetails params={params} />
        </div>
    );
};

export default ProductDetailsPage;