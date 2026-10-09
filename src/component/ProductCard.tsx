import { Product } from '@/type/type';
import Link from 'next/link';
import React from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

interface ProductType {
    product: Product
}
const unitBangla: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
    gram: "গ্রাম",
    ml: "মিলি",
};

const ProductCard = ({ product }: ProductType) => {
    const englishToBanglaNumber =(number: number): string => {
        const banglaDigits = "০১২৩৪৫৬৭৮৯";

        return String(number).replace(
            /\d/g,
            (digit: string) => banglaDigits[Number(digit)]
        );
    }
    return (
        <Link href={`/products/${product.id}`}><article className='bg-white p-4 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"'>
            <header className='flex gap-3 items-center'>
                <p className='bg-[#F0F5F0] rounded-xl p-4 text-xl'>{product.image}</p>
                <div>
                    <h2 className='text-lg font-bold'>{product.nameBn}</h2>
                    <p>প্রতি {unitBangla[product.unit.toLowerCase()] || product.unit}</p>
                </div>
            </header>
            <div >
                <div className='mt-4'>
                    <h2>আজকের দাম</h2>

                    <div className='flex justify-between items-center'>
                        <p><span className='text-2xl font-bold'>{englishToBanglaNumber(product.today)}</span> টাকা</p>
                        <p className={`flex items-center gap-2 text-lg font-semibold px-3 py-1 rounded-3xl bg-[#F0F5F0] ${product.change.pct > 0 ? 'text-[#D03739]' : product.change.pct < 0 ? 'text-[#1A9951]' : 'text-black'}`}>
                            <span>{
                                product.change.dir === "up" ?
                                    <TiArrowSortedUp className='text-xl text-[#890505]' />
                                    : product.change.dir === "down" ?
                                        <TiArrowSortedDown className='text-xl text-[#05893E]' /> :
                                        <span className='text-xl text-black'>—</span>
                            }</span>{product.change.pct < 0? englishToBanglaNumber(product.change.pct).slice(1):englishToBanglaNumber(product.change.pct)}%
                        </p>
                    </div>
                </div>
            </div>
        </article></Link>
    );
};

export default ProductCard;