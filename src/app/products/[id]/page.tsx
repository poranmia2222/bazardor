
import { Suspense } from 'react';
import ProductDetails from '@/component/ProductDetails';

interface Props {
    params: Promise<{ id: string }>;
}

const ProductDetailsPage = ({ params }: Props) => {
    return (
        <Suspense
            fallback={
                <p className="p-6 text-center">
                    পণ্যের তথ্য লোড হচ্ছে...
                </p>
            }
        >
            <ProductDetails params={params} />
        </Suspense>
    );
};

export default ProductDetailsPage;
