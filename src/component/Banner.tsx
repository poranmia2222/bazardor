import Image from 'next/image';
import React, { Suspense } from 'react';
import bannerImg from '../../public/bazar-hero.png'
import DateDisplay from './DateDisplay';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row container mx-auto  justify-between bg-white p-6 my-10 rounded-3xl'>
            <div className='space-y-8 md:w-200'>
                <span className="inline-flex items-center rounded-full border border-[#05893E] bg-[#05893e50] px-3 py-1 text-sm text-[#05893E]">
                   <Suspense fallback={ <span className="loading loading-spinner loading-lg text-success"></span>}><DateDisplay /></Suspense> 
                </span>
                <h1 className='md:text-5xl text-xl font-bold'>আজকের বাজারের দাম এক নজরে</h1>
                <p className='text-[#1D271F80] md:text-xl'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <a href='#all-products' className="btn btn-success bg-primary text-white">সব পণ্য দেখুন</a>
            </div>
            <Image className='w-100' src={bannerImg} alt='bazar-hero-image'></Image>
        </div>
    );
};

export default Banner;