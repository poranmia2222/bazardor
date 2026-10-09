import { Product } from '@/type/type';
import React from 'react';
import MarqueeText from "react-fast-marquee";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

const unitBangla: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
    gram: "গ্রাম",
    ml: "মিলি",
};


const Marquee = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
        next: {
            revalidate: 3600,
        },
    })
    const data: Product[] = await res.json()
    // console.log(data)

    const englishToBanglaNumber =(number: number): string => {
        const banglaDigits = "০১২৩৪৫৬৭৮৯";

        return String(number).replace(
            /\d/g,
            (digit: string) => banglaDigits[Number(digit)]
        );
    }

    return (
        <div className='bg-white'>
            <div className='py-3 my-2 border-b-2 border-b-slate-300'>
                <MarqueeText>
                    {
                        data.map(item => <div className='ml-4 flex items-center gap-1' key={item.id}>
                            <span>{item.image}</span>
                            <span>{item.nameBn}</span>
                            <span>{englishToBanglaNumber(item.today)} টাকা/{unitBangla[item.unit.toLowerCase()] || item.unit}</span> 
                            <span>{
                                item.change.dir === "up" ? <TiArrowSortedUp className='text-xl text-[#890505]' /> : item.change.dir === "down" ? <TiArrowSortedDown className='text-xl text-[#05893E]' /> :
                                    <span className='text-xl text-black'>—</span>
                            }</span>
                            {
                                item.change.pct > 0 ?
                                    <span className=' text-[#890505]'>
                                        {englishToBanglaNumber(item.change.pct)}%
                                    </span> : item.change.pct < 0 ? <span className='text-[#05893E]'>
                                        {englishToBanglaNumber(item.change.pct).slice(1)}%
                                    </span> : <span className='text-black'>
                                        {englishToBanglaNumber(item.change.pct)}%
                                    </span>
                            }
                        </div>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;