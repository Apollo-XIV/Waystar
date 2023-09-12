'use client'
import Search from '@/public/search.svg'
import { useRouter } from 'next/navigation'
import { useRef } from 'react';

export default function Layout({children}:{children: React.ReactNode}) {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleKeyDown = (e: any) => {
        if (e.key == "Enter") {
            router.push("/search/"+inputRef.current?.value);
        }
    }

    return <>
        <div className='bg-secondary w-full flex px-5'>
            <div className='mx-auto m-10 bg-primary flex flex-row rounded-3xl hover:brightness-90 transition-all w-full max-w-3xl'>
                
                {/* Search Icon */}
                <div className='w-12 h-12 flex place-items-center justify-center'>
                    <Search className="w-6 h-6"/>
                </div>
                <input onKeyDown={handleKeyDown} ref={inputRef} className='bg-transparent w-full h-full pl-1 focus:outline-none' type="text"></input>
            </div>
        </div>
        <div className='flex place-items-center justify-center'>
            <div className='max-w-prose bg-transparent w-full mx-5'>{children}</div>
        </div>
    </>
}