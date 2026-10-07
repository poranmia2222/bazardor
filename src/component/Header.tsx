
import Navbar from './Navbar';
import Image from 'next/image';
import logo from '../../public/logo-icon.png'
import DateDisplay from './DateDisplay';
import Link from 'next/link';

const Header = () => {
    return (
        <div>
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
                <div className='flex gap-4'>
                    <button className="btn border-none bg-transparent ">সাইন ইন</button>
                    <button className="btn btn-success bg-primary text-white">সাইন আপ</button>
                </div>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;