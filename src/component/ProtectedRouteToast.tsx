
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

const ProtectedRouteToast = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (searchParams.get('reason') === 'login-required') {
            toast('Please sign in to access that page.', {
                icon: '⚠️',
            });

            router.replace('/signin', { scroll: false });
        }
    }, [searchParams, router]);

    return null;
};

export default ProtectedRouteToast;
