'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Logo() {
    const pathname = usePathname();


    return <>
    <style jsx>{`
        img {
            ${(pathname == "/") ? `width: 12rem;` : `margin-right: auto; margin-left: 20px; width: 7rem; margin-top: -2rem;`}
        }

    `}</style>
    <div className="fixed z-10 flex justify-center top-12 w-full">
        <img className="w-48 hover:scale-105 transition-all" src="/logo.svg"/>
    </div>
    </>
}