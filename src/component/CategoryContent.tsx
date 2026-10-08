import { Product } from "@/type/type";
import ProductCard from "./ProductCard";
import SortSection from "./SortSection";

interface ProductDataType {
    params: Promise<{ category: string }>;
}

const CategoryContent = async ({ params }: ProductDataType) => {
    const { category } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${category}`,
        {
            next: {
                revalidate: 3600,
            },
        }
    );

    const data: Product[] = await res.json();

    const englishToBanglaNumber = (number: number): string => {
        const banglaDigits = "০১২৩৪৫৬৭৮৯";

        return String(number).replace(
            /\d/g,
            (digit: string) => banglaDigits[Number(digit)]
        );
    };

    return (
        <div className="container mx-auto">

            <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full mt-10 flex items-center gap-4">
                <p className="text-3xl">{data[0].categoryIcon}</p>
                <div>
                    <h1 className="text-2xl font-bold">{data[0].categoryNameBn} </h1>
                    <p>
                        {englishToBanglaNumber(data.length)}
                        টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>
            <SortSection data={data} />
        </div>
    );
};

export default CategoryContent;