'use client'
import { signOut, updateUser, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { IoIosLogOut } from 'react-icons/io';

const ProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const handleSignOut = async () => {
        await signOut();
        router.replace('/');
    };


    const handleUpdateName = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const name = formData.get('name');

        if (typeof name !== 'string' || !name.trim()) {
            return;
        }
        const resData = await updateUser({
            name: name.trim(),
        })

    };


    return (
        <div className='max-w-4xl mx-auto mt-10'>
            <h2 className='md:text-2xl'>আমার প্রোফাইল</h2>
            <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full mt-4 flex items-center justify-between gap-4">
                <div className='flex items-center gap-4'>
                    {session?.user.image ? <Image className='rounded-xl' src={session?.user.image} alt='profile image' width={70} height={70}></Image> : <div className="flex px-8 py-3 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                        {session?.user.name?.charAt(0).toUpperCase() || 'U'}
                    </div>}
                    <div>
                        <h2 className='md:text-xl font-bold'>{session?.user.name}</h2>
                        <p className='text-[10px]'>{session?.user.email}</p>
                    </div>
                </div>
                <button type="button" onClick={handleSignOut} className="text-[#D03739] btn border-[#D03739] p-2 bg-transparent text-[10px]" >
                    Sign Out <IoIosLogOut className='md:text-xl' />
                </button>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 w-full mt-4 ">
                <form onSubmit={handleUpdateName} className='md:w-90 mx-auto'>
                    <fieldset className="fieldset">
                        <label className="label text-lg" htmlFor="name">নাম</label>
                        <input name='name' type="text" id="name" className="input w-full text-lg" required />
                        <button type='submit' className="btn btn-success bg-primary my-2 text-white">আপডেট</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;