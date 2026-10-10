import { Category } from '@/type/type';
import Link from 'next/link';
import React, { Suspense } from 'react';
import CategoryNavLinks from './CategoryNavLinks';

const Navbar = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories",
        {
            next: {
                revalidate: 3600,
            },
        }
    );
    const data: Category[] = await res.json()
    // console.log(data)

    return (
        <div className='max-lg:collapse border-b-2 border-b-slate-300 bg-white shadow-sm w-full rounded-md'>
            <div className="max-lg:collapse container mx-auto">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar ">
                    <div className="">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <div className="navbar-start hidden lg:flex">
                        <ul className=" gap-2 menu-horizontal  px-1">
                            <Suspense fallback={null}>
                                <CategoryNavLinks categories={data} />
                            </Suspense>
                        </ul>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        <Suspense fallback={null}>
                            <CategoryNavLinks categories={data} />
                        </Suspense>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;