'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export default function Authed({children,}:{children: React.ReactNode}) {

    const pathname = usePathname();


    return <>
    <style jsx>{`
        #selector {
            ${(pathname == "/timeline") ? `margin-left: 0;` : `margin-left: 50%;`}
        }
    
    `}</style>
        <header className="w-full fixed flex justify-center top-0 h-28 dark:bg-[#171d3b]">
        <div id="navSection" className='flex relative items-end w-1/2 pb-10px'>

        <div id="selector" className='absolute -z-10 rounded-t-lg h-8 w-1/2 transition-all dark:bg-[#303666]'/>
        <Link href={"/timeline"} className='w-1/2 text-lg text-center'>Timeline</Link>
        <Link href={"/logs"} className='w-1/2 text-lg text-center'>Logs</Link>
        </div>

        </header>
        <div className='h-32'></div>
        {children}
    </>
}