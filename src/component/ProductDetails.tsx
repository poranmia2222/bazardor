
import { Product } from '@/type/type';
import { notFound } from 'next/navigation';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import BazarPriceTable from './BazarPriceTable';

interface ProductDataType {
    params: Promise<{ id: string }>;
}

const unitBangla: Record<string, string> = {
    kg: 'কেজি',
    litre: 'লিটার',
    piece: 'পিস',
    dozen: 'ডজন',
    gram: 'গ্রাম',
    ml: 'মিলি',
};

export interface MarketType {
    market: string;
    division: string;
    min: number;
    max: number;
}

const englishToBanglaNumber = (number: number): string => {
    const banglaDigits = '০১২৩৪৫৬৭৮৯';

    return String(number).replace(/\d/g, (digit) => {
        return banglaDigits[Number(digit)];
    });
};

const ProductDetails = async ({ params }: ProductDataType) => {
    const { id } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
        {
            next: {
                revalidate: 3600,
            },
        }
    );

    if (!res.ok) {
        notFound();
    }

    const productData: Product = await res.json();

    if (!productData || !productData.nameBn) {
        notFound();
    }

    // Safe unit
    const unit = productData.unit?.toLowerCase() ?? '';
    const unitBn = unitBangla[unit] ?? productData.unit ?? 'একক';

    // Safe price values
    const today = Number(productData.today ?? 0);
    const yesterday = Number(productData.yesterday ?? today);
    const priceUpdate = Math.abs(today - yesterday);

    // Safe change values
    const changeDir = productData.change?.dir ?? 'same';
    const changePct = Number(productData.change?.pct ?? 0);

    // Safe market list
    const market: MarketType[] = Array.isArray(productData.markets)
        ? productData.markets.filter(
            (item) =>
                item &&
                Number.isFinite(item.min) &&
                Number.isFinite(item.max)
        )
        : [];

    const sortByMarketMinPrice = [...market].sort(
        (a, b) => a.min - b.min
    );

    const sortByMarketMaxPrice = [...market].sort(
        (a, b) => b.max - a.max
    );

    const hasMarkets = market.length > 0;

    const averagePrice = hasMarkets
        ? (sortByMarketMaxPrice[0].max +
            sortByMarketMinPrice[0].min) /
        2
        : 0;

    return (
        <div className="container mx-auto">
            {/* Product information */}
            <div className="mt-10 flex  flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-4">
                    <p className="rounded-2xl bg-[#F0F5F0] p-2 md:p-4 md:text-3xl">
                        {productData.image ?? '🛒'}
                    </p>
                    <div>
                        <h1 className="md:text-2xl font-bold">
                            {productData.nameBn}
                        </h1>

                        <p className='text-[10px] md:text-sm'>
                            প্রতি {unitBn} {productData.categoryNameBn ?? ''}
                        </p>

                        <p className='text-[10px] md:text-lg'>
                            গতকালের তুলনায় আজ দাম{' '}
                            <span className="font-bold">
                                {changeDir === 'up'
                                    ? 'বেড়েছে'
                                    : changeDir === 'down'
                                        ? 'কমেছে'
                                        : 'অপরিবর্তিত রয়েছে'}
                            </span>{' '}
                            {englishToBanglaNumber(priceUpdate)} টাকা
                        </p>
                    </div>
                </div>

                {/* Today's price */}
                <div className="rounded-md md:rounded-2xl bg-[#F0F5F0] md:px-5 md:py-2 text-center">
                    <p className='text-[8px] md:text-lg'>আজকের দাম</p>

                    <h2 className="md:text-4xl font-bold">
                        {englishToBanglaNumber(today)}
                    </h2>

                    <p className='text-[10px] md:text-lg'>প্রতি/{unitBn}</p>

                    <p
                        className={`flex items-center justify-center gap-2 rounded-3xl px-3 py-1 text-[10px] md:text-lg font-semibold ${changePct > 0
                                ? 'text-[#D03739] '
                                : changePct < 0
                                    ? 'text-[#1A9951]'
                                    : 'text-black'
                            }`}
                    >
                        {changeDir === 'up' ? (
                            <TiArrowSortedUp className="text-xl text-[#890505]" />
                        ) : changeDir === 'down' ? (
                            <TiArrowSortedDown className="text-xl text-[#05893E]" />
                        ) : (
                            <span>—</span>
                        )}

                        {englishToBanglaNumber(Math.abs(changePct))}%
                    </p>
                </div>
            </div>

            {/* Market price summary */}
            <div className="my-10 rounded-2xl border border-slate-200 bg-white p-3">
                <h2 className="font-semibold">দামের সারসংক্ষেপ</h2>

                {hasMarkets ? (
                    <>
                        <div className="my-4 flex flex-wrap gap-2">
                            <div className="w-full rounded-2xl border border-slate-200 p-4 sm:flex-1">
                                <p>সর্বনিম্ন দাম</p>
                                <h2 className="text-[#1A9951]">
                                    <span className="text-3xl font-bold">
                                        {englishToBanglaNumber(
                                            sortByMarketMinPrice[0].min
                                        )}
                                    </span>{' '}
                                    টাকা
                                </h2>
                                <p>সবচেয়ে কম দামের বাজার</p>
                            </div>

                            <div className="w-full rounded-2xl border border-slate-200 p-4 sm:flex-1">
                                <p>সর্বোচ্চ দাম</p>
                                <h2 className="text-[#D03739]">
                                    <span className="text-3xl font-bold">
                                        {englishToBanglaNumber(
                                            sortByMarketMaxPrice[0].max
                                        )}
                                    </span>{' '}
                                    টাকা
                                </h2>
                                <p>সবচেয়ে বেশি দামের বাজার</p>
                            </div>

                            <div className="w-full rounded-2xl border border-slate-200 p-4 sm:flex-1">
                                <p>গড় দাম</p>
                                <h2 className="text-[#1A9951]">
                                    <span className="text-3xl font-bold">
                                        {englishToBanglaNumber(averagePrice)}
                                    </span>{' '}
                                    টাকা
                                </h2>
                                <p>প্রতি {unitBn}-এর হিসাবে</p>
                            </div>
                        </div>

                        <h2 className="my-4 font-semibold">
                            বাজারভিত্তিক আজকের দাম
                        </h2>

                        <BazarPriceTable market={market} />
                    </>
                ) : (
                    <p className="py-8 text-center text-gray-500">
                        বাজারের দামের তথ্য এখনো পাওয়া যায়নি।
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
