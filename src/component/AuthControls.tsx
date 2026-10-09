
'use client';

import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';

const AuthControls = () => {
    const { data: session, isPending } = useSession();

    const handleSignOut = async () => {
        await signOut();
    };

    if (isPending) {
        return <span>Loading...</span>;
    }

    if (session?.user) {
        return (

            <div className="flex items-center gap-4">
                <h1 className='font-semibold'>{session.user.name}</h1>
                <details className="dropdown dropdown-end ">
                    
                    <summary className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                            {session.user.image ? (
                                <img src={session.user.image} alt={session.user.name || 'Profile'}/>
                            ) : (
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                                    {session.user.name?.charAt(0).toUpperCase() || 'U'}
                                </div>
                            )}
                        </div>
                    </summary>

                    <ul className="menu dropdown-content z-50 mt-3 w-64 rounded-box bg-base-100 p-3 shadow-lg">
                        <li className="menu-title">
                            <span>My Account</span>
                        </li>
                        <li className="pointer-events-none">
                            <div className="flex flex-col items-start gap-1 py-3">
                                <span className="font-bold text-base-content">
                                    {session.user.name}
                                </span>
                                <span className="text-xs text-base-content/60">
                                    {session.user.email}
                                </span>
                            </div>
                        </li>
                        <div className="divider my-1" />

                        <li>
                            <Link href="/profile">My Profile</Link>
                        </li>

                        <div className="divider my-1" />

                        <li>
                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="text-error"
                            >
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </details>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            <Link href="/signin" className="btn border-none bg-transparent" >সাইন ইন</Link>
            <Link href="/signup" className="btn btn-success bg-primary text-white">সাইন আপ</Link>
        </div>
    );
};

export default AuthControls;