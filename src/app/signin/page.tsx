'use client'
import { signIn } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';
const SignInPage = () => {

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string };
        // console.log(user)
        const { data: resData, error } = await signIn.email({
            ...user,
            callbackURL: "/",
        })
        if (resData) {
            console.log(user);
        }

        if (error) {
            console.log(error);
        }

    }

    const signInWithGoogle = async () => {
        const { data, error } = await signIn.social({
            provider: 'google',
        });
    };

    const signInWithGithub = async () => {
    const { data, error } = await signIn.social({
        provider: "github"
    })
}



    return (
        <div>
            <div className='mx-auto max-w-110 mt-2'>
                <div className='my-8'>
                    <h2 className='text-center text-3xl font-bold'>সাইন ইন</h2>
                    <p className='text-center'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                </div>
                <div className='bg-white p-8 rounded-2xl border border-slate-300'>
                    <form onSubmit={handleSignIn}>
                        <fieldset className="fieldset">
                            <label className="label text-lg" htmlFor="email">ইমেইল</label>
                            <input name='email' type="email" id="email" className="input w-full text-lg" placeholder="you@example.com" />
                            <label className="label text-lg" htmlFor="password">পাসওয়ার্ড</label>
                            <input name='password' type="password" id="password" className="input w-full text-lg" placeholder="কমপক্ষে ৮ অক্ষর" />
                            <button className="btn btn-success bg-primary my-2 text-white">সাইন ইন</button>
                        </fieldset>
                    </form>
                    <div className="divider">অথবা</div>
                    <div className='flex gap-2'>
                        <button onClick={signInWithGoogle} className="btn my-2  flex-1"><FcGoogle />অ্যাকাউন্ট তৈরি করুন</button>
                        <button onClick={signInWithGithub} className="btn flex-1 my-2"><VscGithubInverted />অ্যাকাউন্ট তৈরি করুন</button>

                    </div>
                    <p className='text-center my-2'>অ্যাকাউন্ট আছে? <Link className='underline text-green-700' href='/signup'>সাইন আপ করুন</Link></p>
                </div>

                <p className='text-center my-2'><Link href='/'>← হোম পেজে ফিরে যান</Link></p>
            </div>
        </div>
    );
};

export default SignInPage;