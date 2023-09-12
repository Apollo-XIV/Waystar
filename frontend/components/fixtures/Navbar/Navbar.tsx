'use client'
import Link from 'next/link';
import Logo from '@/public/logo.svg'
import Tab from '@/components/fixtures/Tab';
import Search from '@/public/search.svg';
import Plus from '@/public/plus.svg';
import UserBox from '@/components/auth/UserBox';
import InteractiveSearch from '@/components/search';

export default function Navbar() {

    return <>
    <header className="w-full fixed top-0 z-30 place-items-center justify-center flex-row flex h-24 bg-secondary">
        <Link className="absolute left-8 " href="/">
            <Logo className="h-24 w-24 hover:scale-105 transition-all cursor-pointer" />
        </Link>
        <nav className='fixed p-5 md:p-0 md:absolute w-full bottom-0 mx-auto '>
            <Tab />
        </nav>
        <div className='absolute right-5 top-[1.5rem] flex gap-4'>
            <Link href={"/new"} className='rounded-full flex place-items-center justify-center hover:brightness-90 transition-all bg-primary h-12 w-12'>
                <Plus className="w-6 h-6"/>
            </Link>
            <InteractiveSearch />
            <UserBox />
        </div>        
    </header>
    </>
}