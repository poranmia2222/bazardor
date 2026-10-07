import { Product } from '@/type/type';
import React from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

interface ProductType {
    product: Product
}
const unitBangla: Record<string, string> = {
    kg: "কেজি",
    liter: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
    gram: "গ্রাম",
    ml: "মিলি",
};

const ProductCard = ({ product }: ProductType) => {
    return (
        <article className='bg-white p-4 rounded-2xl'>
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
                        <p><span className='text-2xl font-bold'>{product.today}</span> টাকা</p>
                        <p className={`flex items-center gap-2 text-lg font-semibold px-3 py-1 rounded-3xl bg-[#F0F5F0] ${product.change.pct > 0 ? 'text-[#D03739]' : product.change.pct < 0 ? 'text-[#1A9951]' : 'text-black'}`}>
                            <span>{
                                product.change.dir === "up" ?
                                    <TiArrowSortedUp className='text-xl text-[#890505]' />
                                    : product.change.dir === "down" ?
                                        <TiArrowSortedDown className='text-xl text-[#05893E]' /> :
                                        <span className='text-xl text-black'>-</span>
                            }</span>{product.change.pct}%
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;