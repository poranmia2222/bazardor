import { Category } from '@/type/type';
import Link from 'next/link';
import React from 'react';

const Navbar = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories", {
        next: {
            revalidate: 3600,
        },
    })
    const data: Category[] = await res.json()
    console.log(data)

    const navLinks = <>

        {
            data.map(item => <li key={item.id} className=' btn border-none'><Link href={`/${item.slug}`}><span>{item.icon}</span> {item.nameBn}</Link></li>)
        }

    </>

    return (
        <div className='max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md'>
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
                        <ul className=" gap-2 menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;