'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';
import Search from '@/public/search.svg';
import Plus from '@/public/plus.svg';
import UserBox from '@/components/auth/UserBox';

export default function Authed({children, modal}:{children: React.ReactNode, modal: React.ReactNode}) {

    const pathname = usePathname();
    const router = useRouter();

    return <>
    <style jsx>{`
        #selector {
            ${(pathname == "/home/timeline") ? `margin-left: 0;` : `margin-left: 50%;`}
        }

        #timeline {
            ${(pathname == "/timeline") ? `margin-left: 0;` : `margin-left: 50%;`}
        }

        #logs {
            ${(pathname == "/timeline") ? `margin-left: 0;` : `margin-left: 50%;`}
        }
    
    `}</style>
        <header className="w-full fixed z-30 flex-row flex top-0 h-24 bg-secondary">
        <div className='m-auto mb-0 w-full sm:w-1/2 md:w-1/3'>
            <div className='grid grid-cols-2'>
                <Link className="text-2xl font-display text-accent font-bold pb-2 text-center" href={"/home/timeline"}>Timeline</Link>
                <Link className="text-2xl font-display text-accent font-bold pb-2 text-center" href={"/home/logs"}>Logs</Link>
            </div>
            <div className='pointer-events-none relative mt-[-3rem] -z-10 flex h-12'>
                <div id="selector" className='flex transition-all ease-in-out duration-500 justify-center w-1/2'>
                    <div className='rounded-t-2xl bg-[#303666] w-48 h-12'></div>
                </div>
            </div>
        </div>
        <div className='absolute right-5 top-[1.5rem] flex gap-4'>
            <Link href={"/new"} className='rounded-full flex place-items-center justify-center hover:brightness-90 transition-all bg-[#303666] h-12 w-12'>
                <Plus className="w-6 h-6"/>
            </Link>
            <Link href={"/search"} className='rounded-full flex place-items-center justify-center bg-[#303666] hover:brightness-90 transition-all h-12 w-12'>
                <Search className="w-6  h-6"/>
            </Link>
            <UserBox />
        </div>
        {/* This will be the search button, both will open modals */}
        
        </header>
        <div className='h-32'></div>
        {children}
        {modal}
    </>
}