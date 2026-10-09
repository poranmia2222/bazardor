import { Product } from '@/type/type';
import React from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import BazarPriceTable from './BazarPriceTable';
interface ProductDataType {
    params: Promise<{ id: string }>;
}

const unitBangla: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
    gram: "গ্রাম",
    ml: "মিলি",
};

export interface MarketType {
    market: string,
    division: string,
    min: number,
    max: number
}

const ProductDetails = async ({ params }: ProductDataType) => {
    const { id } = await params
    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
        {
            next: {
                revalidate: 3600,
            },
        }
    );
    const productData: Product = await res.json()

    console.log(id, productData)

    const englishToBanglaNumber = (number: number): string => {
        const banglaDigits = "০১২৩৪৫৬৭৮৯";

        return String(number).replace(
            /\d/g,
            (digit: string) => banglaDigits[Number(digit)]
        );
    };

    let priceUpdate = productData.today - productData.yesterday

    if (priceUpdate < 0) {
        priceUpdate = Number(priceUpdate.toString().slice(1))
    }

    const market: MarketType[] = productData.markets;

    const sortByMarketMinPrice = [...market].sort(
        (a, b) => a.min - b.min
    );

    const sortByMarketMaxPrice = [...market].sort(
        (a, b) => b.max - a.max
    );

    const averageprice = (sortByMarketMaxPrice[0].max + sortByMarketMinPrice[0].min) / 2

    return (
        <div className="container mx-auto">

            <div>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full mt-10 flex items-center justify-between gap-4">
                    <div className='flex items-center gap-4'>
                        <p className="text-3xl p-4 bg-[#F0F5F0] rounded-2xl">{productData.image}</p>
                        <div>
                            <h1 className="text-2xl font-bold">{productData.nameBn}</h1>
                            <p>প্রতি {unitBangla[productData.unit.toLowerCase()] || productData.unit} {productData.categoryNameBn}</p>
                            <p>গতকালের তুলনায় আজ দাম <span className='font-bold'>{
                                productData.change.dir === 'up' ? 'বেড়েছে' : 'কমেছে'
                            }</span> {englishToBanglaNumber(priceUpdate)} টাকা</p>
                        </div>
                    </div>
                    <div className='py-1 px-5 bg-[#F0F5F0] rounded-2xl text-center'>
                        <p>আজকের দাম</p>
                        <h2 className='text-4xl font-bold'>{englishToBanglaNumber(productData.today)}</h2>
                        <p>প্রতি/{unitBangla[productData.unit.toLowerCase()] || productData.unit}</p>
                        <p className={`flex items-center gap-2 text-lg font-semibold px-3 py-1 rounded-3xl bg-[#F0F5F0] ${productData.change.pct > 0 ? 'text-[#D03739]' : productData.change.pct < 0 ? 'text-[#1A9951]' : 'text-black'}`}>
                            <span>{
                                productData.change.dir === "up" ?
                                    <TiArrowSortedUp className='text-xl text-[#890505]' />
                                    : productData.change.dir === "down" ?
                                        <TiArrowSortedDown className='text-xl text-[#05893E]' /> :
                                        <span className='text-xl text-black'>—</span>
                            }</span>{productData.change.pct < 0 ? englishToBanglaNumber(productData.change.pct).slice(1) : englishToBanglaNumber(productData.change.pct)}%
                        </p>
                    </div>
                </div>

            </div>
            <div className='bg-white border border-slate-200 rounded-2xl p-3 my-10'>
                <h2 className='font-semibold'>দামের সারসংক্ষেপ</h2>
                <div className='flex gap-2 my-4'>
                    <div className='w-full border border-slate-200 rounded-2xl p-4'>
                        <p>সর্বনিম্ন দাম</p>
                        <h2 className='text-[#1A9951] '><span className='text-3xl font-bold'>{englishToBanglaNumber(sortByMarketMinPrice[0].min)}</span> টাকা</h2>
                        <p>সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className='w-full border border-slate-200 rounded-2xl p-4'>
                        <p>সর্বনিম্ন দাম</p>
                        <h2 className='text-[#D03739]'><span className='text-3xl font-bold'>{englishToBanglaNumber(sortByMarketMaxPrice[0].max)}</span> টাকা</h2>
                        <p>সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className='w-full border border-slate-200 rounded-2xl p-4'>
                        <p>সর্বনিম্ন দাম</p>
                        <h2 className='text-[#1A9951]'><span className='text-3xl font-bold'>{englishToBanglaNumber(averageprice)}</span> টাকা</h2>
                        <p>প্রতি {unitBangla[productData.unit.toLowerCase()] || productData.unit}-এর হিসাবে</p>
                    </div>
                </div>
                <div>
                    <BazarPriceTable market={market}></BazarPriceTable>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;