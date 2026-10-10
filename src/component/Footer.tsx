import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-white mt-10'>
            <div className='flex flex-col md:flex-row justify-between container mx-auto py-2 md:py-6 ' >
                <p className='text-[10px] md:text-sm'>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p className='text-[10px] md:text-sm'>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </footer>
    );
};

export default Footer;