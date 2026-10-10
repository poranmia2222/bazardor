"use client";

import { useState } from "react";
import { Product } from "@/type/type";
import ProductCard from "./ProductCard";
import SortDropdown from "./SortDropdown";

interface Props {
    data: Product[];
}
type SortType = "low" | "high";

const SortSection = ({ data }: Props) => {
    
    const [sort, setSort] = useState<SortType | null>(null);
    const handleSort = (sort: SortType): void => {
        setSort(sort);
    };

    const sortedData = [...data];

    if (sort === "low") {
        sortedData.sort((a, b) => a.today - b.today );
    }

    if (sort === "high") {
        sortedData.sort((a, b) => b.today  - a.today);
    }

    return (
        <>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full mt-10 flex items-center justify-end gap-4">
                <p>সাজান</p>
                <SortDropdown handleSort={handleSort} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {sortedData.map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>
        </>
    );
};

export default SortSection;