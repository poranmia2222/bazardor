import { Product } from "@/type/type";
import ProductCard from "./ProductCard";

interface ProductDataType {
    params: Promise<{ category: string }>;
}

const CategoryContent = async ({ params }: ProductDataType) => {
    const { category } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${category}`,
        {
            next: {
                revalidate: 3600,
            },
        }
    );

    const data: Product[] = await res.json();

    console.log(data);

    const englishToBanglaNumber = (number: number): string => {
        const banglaDigits = "০১২৩৪৫৬৭৮৯";

        return String(number).replace(
            /\d/g,
            (digit: string) => banglaDigits[Number(digit)]
        );
    }

    return (
        <div className="container mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full mt-10 flex items-center gap-4">
                <p className="text-3xl">{data[0].categoryIcon}</p>
                <div>
                    <h1 className="text-2xl font-bold">{data[0].categoryNameBn}</h1>
                    <p>{englishToBanglaNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full mt-10 flex items-center gap-4">
                <p className="text-3xl">{data[0].categoryIcon}</p>
                <div>
                    <h1 className="text-2xl font-bold">{data[0].categoryNameBn}</h1>
                    <p>{englishToBanglaNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-10'>
                {
                    data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default CategoryContent;