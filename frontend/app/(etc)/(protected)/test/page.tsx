'use client'
import InteractiveSearchALT from '@/components/search'; 
import Search from '@/public/search.svg';
import Tab from '@/components/fixtures/Tab';

export default function Test() {
    return <>

    <div className='bg-secondary p-10 pb-0 pl-20'>
    <div className='flex flex-row gap-2 mb-20'>
        <InteractiveSearchALT />
        <div className='rounded-full h-12 flex flex-row bg-primary hover:brightness-90 w-fit transition-all'>
            <div className='w-12 h-12 flex place-items-center justify-center'>
                <Search className="w-6 h-6"/>
            </div>
        </div>
    </div>

    <Tab />
    </div>
    </>
}