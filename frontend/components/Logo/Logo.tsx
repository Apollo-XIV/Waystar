'use client';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function Logo() {
    const pathname = usePathname();


    return <>
    <style jsx>{`
        #Image {
            ${(pathname == "/") ? `width: 12rem;` : `position: fixed; width: 7rem; left: 20px; z-index: 40; top: 1rem;`}
        }

        div {
            ${(pathname == "/") ? `` : `display: contents` }
        }

    `}</style>
    <div className="fixed z-10 flex justify-center top-12 pointer-events-none w-full">
        <Image alt="logo" id="Image" className="w-48 hover:scale-105 pointer-events-auto transition-all" src="/logo.svg"/>
    </div>
    </>
}