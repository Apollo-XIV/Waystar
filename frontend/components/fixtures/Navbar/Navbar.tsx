'use client'
import Link from 'next/link';
import Logo from '@/public/logo.svg'
import {usePathname} from "next/navigation";
import Search from '@/public/search.svg';
import Plus from '@/public/plus.svg';
import UserBox from '@/components/auth/UserBox';

export default function Navbar() {
    const path = usePathname();

    return <>
    <header className="w-full fixed top-0 z-30 place-items-center justify-center flex-row flex h-24 bg-secondary">
        <Logo className="absolute left-8 h-24 w-24" />
        <nav>
        <div className="tabs">
            <Link prefetch={false} href={"/timeline"} className={`tab tab-bordered ${(path.startsWith("/timeline")) ? "tab-active" : ""}`}>Timeline</Link> 
            <Link href={"/logs"} className={`tab tab-bordered ${(path.startsWith("/logs")) ? "tab-active" : ""}`}>Logs</Link>
            <Link href={"/discover"} className={`tab tab-bordered ${(path.startsWith("/discover")) ? "tab-active" : ""}`}>Discover</Link>
        </div>
        </nav>
        <div className='absolute right-5 top-[1.5rem] flex gap-4'>
            <Link href={"/new"} className='rounded-full flex place-items-center justify-center hover:brightness-90 transition-all bg-primary h-12 w-12'>
                <Plus className="w-6 h-6"/>
            </Link>
            <Link href={"/search"} className='rounded-full flex place-items-center justify-center bg-primary hover:brightness-90 transition-all h-12 w-12'>
                <Search className="w-6  h-6"/>
            </Link>
            <UserBox />
        </div>        
    </header>
    </>
}