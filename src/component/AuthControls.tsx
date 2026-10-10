
'use client';

import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const AuthControls = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

        const handleSignOut = async () => {
    try {
        const { error } = await signOut();

        if (error) {
            toast.error(error.message || "Sign out failed!");
            return;
        }

        toast.success("Signed out successfully!");

        setTimeout(() => {
            router.replace("/");
        }, 1000);
    } catch {
        toast.error("Something went wrong. Please try again.");
    }
};

    if (isPending) {
        return (
            <span className="loading loading-spinner loading-md text-success" />
        );
    }

    if (session?.user) {
        return (
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* Username: hidden on phones */}
                <h1 className="hidden max-w-32 truncate font-semibold sm:block">
                    {session.user.name}
                </h1>

                <details className="dropdown dropdown-end">
                    <summary className="btn btn-ghost btn-circle avatar h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12">
                        <div className="w-full rounded-full">
                            {session.user.image ? (
                                <img
                                    src={session.user.image}
                                    alt={session.user.name || 'Profile'}
                                    className="h-full w-full rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                                    {session.user.name?.charAt(0).toUpperCase() || 'U'}
                                </div>
                            )}
                        </div>
                    </summary>

                    <ul className="menu dropdown-content z-50 mt-3 w-56 max-w-[calc(100vw-1rem)] rounded-box bg-base-100 p-3 shadow-lg sm:w-64">
                        <li className="menu-title">
                            <span>My Account</span>
                        </li>

                        <li className="pointer-events-none">
                            <div className="flex flex-col items-start gap-1 overflow-hidden py-3">
                                <span className="max-w-full truncate font-bold text-base-content">
                                    {session.user.name}
                                </span>
                                <span className="max-w-full truncate text-xs text-base-content/60">
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
        <div className="flex items-center gap-1.5 sm:gap-3">
            <Link
                href="/signin"
                className="btn btn-ghost btn-sm border-none px-2 sm:btn-md sm:px-4"
            >
                সাইন ইন
            </Link>

            <Link
                href="/signup"
                className="btn btn-success btn-sm bg-primary px-2 text-xs text-white sm:btn-md sm:px-4 sm:text-sm"
            >
                সাইন আপ
            </Link>
        </div>
    );
};

export default AuthControls;
