import ProductDetails from '@/component/ProductDetails';
import React, { Suspense } from 'react';

interface Props {
    params: Promise<{ id: string }>;
}
const ProductDetailsPage = ({ params }: Props) => {
    return (
        <div>
            <Suspense
                fallback={<div>Loading category...</div>}>
                <ProductDetails params={params} />
            </Suspense>
        </div>
    );
};

export default ProductDetailsPage;