import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';

const SignInPage = () => {
    return (
        <div>
            <div className='mx-auto max-w-110 mt-2'>
                <div className='my-8'>
                    <h2 className='text-center text-3xl font-bold'>সাইন ইন</h2>
                    <p className='text-center'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                </div>
                <div className='bg-white p-8 rounded-2xl border border-slate-300'>
                    <form action="">
                        <fieldset className="fieldset">
                            <label className="label text-lg" htmlFor="email">ইমেইল</label>
                            <input type="email" id="email" className="input w-full text-lg" placeholder="you@example.com" />
                            <label className="label text-lg" htmlFor="password">পাসওয়ার্ড</label>
                            <input type="password" id="password" className="input w-full text-lg" placeholder="কমপক্ষে ৮ অক্ষর" />
                            <button className="btn btn-success bg-primary my-2 text-white">সাইন ইন</button>
                        </fieldset>
                    </form>
                    <div className="divider">অথবা</div>
                    <div className='flex gap-2'>
                        <button className="btn my-2  flex-1"><FcGoogle />অ্যাকাউন্ট তৈরি করুন</button>
                        <button className="btn flex-1 my-2"><VscGithubInverted />অ্যাকাউন্ট তৈরি করুন</button>

                    </div>
                    <p className='text-center my-2'>অ্যাকাউন্ট আছে? <Link className='underline text-green-700' href='/signin'>সাইন আপ করুন</Link></p>
                </div>

                <p className='text-center my-2'><Link href='/'>← হোম পেজে ফিরে যান</Link></p>
            </div>
        </div>
    );
};

export default SignInPage;