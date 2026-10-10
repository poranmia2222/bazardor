
import Navbar from './Navbar';
import Image from 'next/image';
import logo from '../../public/logo-icon.png'
import DateDisplay from './DateDisplay';
import Link from 'next/link';
import AuthControls from './AuthControls';
import { Suspense } from 'react';

const Header = () => {

    return (
        <div className='bg-white'>
            <div className='container mx-auto flex justify-between my-2 px-4 lg:p-0'>
                <Link href='/'>
                    <div className='flex gap-4 '>
                        <Image className='w-10 h-10 bg-primary p-2 rounded' src={logo} alt='logo'></Image>
                        <div>
                            <h2 className='text-xl font-bold'>বাজার দর</h2>
                            <DateDisplay></DateDisplay>
                        </div>
                    </div>
                </Link>
                {/* <div className='flex gap-4'>
                   <Link href="/signin"><button className="btn border-none bg-transparent ">সাইন ইন</button></Link>
                    <Link href="/signup"><button className="btn btn-success bg-primary text-white">সাইন আপ</button></Link>
                </div> */}
                <Suspense fallback={<span className="loading loading-spinner loading-lg text-success"></span>}>
                    <AuthControls />
                </Suspense>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;