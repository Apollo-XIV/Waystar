import React from "react";
import Link from 'next/link';

import Search from '@/public/search.svg';
import Plus from '@/public/plus.svg';
import UserBox from '@/components/auth/UserBox';

export default function Layout({children, modals} : {children: React.ReactNode, modals: React.ReactNode}) {
    return <>
    <header className="w-full fixed top-0 z-30 flex-row flex h-24 bg-secondary">
        <div className='absolute right-5 top-[1.5rem] flex gap-4'>
            <Link href={"/new"} className='rounded-full flex place-items-center justify-center hover:brightness-90 transition-all bg-[#303666] h-12 w-12'>
                <Plus className="w-6 h-6"/>
            </Link>
            <Link href={"/search"} className='rounded-full flex place-items-center justify-center bg-[#303666] hover:brightness-90 transition-all h-12 w-12'>
                <Search className="w-6  h-6"/>
            </Link>
            <UserBox />
        </div>        
    </header>
    <div className="h-24" />
    {children}
    {modals}
    <footer className="h-96 bg-slate-950">

    </footer>
    </>
}