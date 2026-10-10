
'use client';

import { signIn, signOut, signUp } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';

const SignUpPage = () => {
    const router = useRouter();


    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "");
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");

        const confirmPassword = String(
            formData.get("confirmPassword") ?? ""
        );
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        try {
            const { error } = await signUp.email({
                name,
                email,
                password,
                callbackURL: "/signin",
            });
            if (error) {
                toast.error(error.message || "Signup failed!");
                return;
            }
            
            const { error: signOutError } = await signOut();

            if (signOutError) {
                toast.error("Account created, but sign-out failed.");
                return;
            }

            toast.success("Account created successfully! Please sign in.");

            setTimeout(() => {
                router.replace("/signin");
            }, 1200);
        } catch {
            toast.error("Something went wrong. Please try again.");
        }
    };


    const signInWithGoogle = async () => {
        try {
            const { error } = await signIn.social({
                provider: 'google',
                callbackURL: '/',
            });

            if (error) {
                toast.error(error.message || 'Google signup failed!');
            }
        } catch {
            toast.error('Google signup failed!');
        }
    };

    const signInWithGithub = async () => {
        try {
            const { error } = await signIn.social({
                provider: 'github',
                callbackURL: '/',
            });

            if (error) {
                toast.error(error.message || 'GitHub signup failed!');
            }
        } catch {
            toast.error('GitHub signup failed!');
        }
    };

    return (
        <div>
            <div className="mx-auto mt-2 max-w-110">
                <div className="my-8">
                    <h2 className="text-center text-3xl font-bold">
                        অ্যাকাউন্ট তৈরি করুন
                    </h2>
                    <p className="text-center">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-300 bg-white p-8">
                    <form onSubmit={handleSignUp}>
                        <fieldset className="fieldset">
                            <label className="label text-lg" htmlFor="name">
                                নাম
                            </label>
                            <input
                                required
                                name="name"
                                type="text"
                                id="name"
                                className="input w-full text-lg"
                                placeholder="যেমন: রহিম উদ্দিন"
                            />

                            <label className="label text-lg" htmlFor="email">
                                ইমেইল
                            </label>
                            <input
                                required
                                name="email"
                                type="email"
                                id="email"
                                className="input w-full text-lg"
                                placeholder="you@example.com"
                            />

                            <label className="label text-lg" htmlFor="password">
                                পাসওয়ার্ড
                            </label>
                            <input
                                required
                                name="password"
                                type="password"
                                id="password"
                                minLength={8}
                                className="input w-full text-lg"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                            />

                            <label
                                className="label text-lg"
                                htmlFor="confirmPassword"
                            >
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>
                            <input
                                required
                                name="confirmPassword"
                                type="password"
                                id="confirmPassword"
                                minLength={8}
                                className="input w-full text-lg"
                                placeholder="আবার লিখুন"
                            />

                            <button
                                type="submit"
                                className="btn btn-success my-2 bg-primary text-white"
                            >
                                অ্যাকাউন্ট তৈরি করুন
                            </button>
                        </fieldset>
                    </form>

                    <div className="divider">অথবা</div>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={signInWithGoogle}
                            className="btn my-2 flex-1"
                        >
                            <FcGoogle /> Google
                        </button>

                        <button
                            type="button"
                            onClick={signInWithGithub}
                            className="btn my-2 flex-1"
                        >
                            <VscGithubInverted /> GitHub
                        </button>
                    </div>

                    <p className="my-2 text-center">
                        অ্যাকাউন্ট আছে?{' '}
                        <Link
                            className="text-green-700 underline"
                            href="/signin"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>
                </div>

                <p className="my-2 text-center">
                    <Link href="/">← হোম পেজে ফিরে যান</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
