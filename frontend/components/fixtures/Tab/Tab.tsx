import {ReactNode, useEffect, useState} from 'react';
import Timeline from '@/public/tabs/timeline.svg';
import Logs from '@/public/tabs/logs.svg';
import Discover from '@/public/tabs/discover.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TabStyles from './Tab.module.css';


export default function Tab() {
    const [tabIndex, setTabIndex] = useState(0);
    const path = usePathname();

    useEffect(()=> {
        switch(path) {
            case "/timeline":
                setTabIndex(1)
                break;
            case "/logs":
                setTabIndex(2)
                break;
            case "/discover":
                setTabIndex(3)
                break;
            default:
                setTabIndex(0)
                break;
        }
    },[path])

    return <>
    <div className="max-w-xl w-full relative outline outline-2 outline-primary p-1 md:p-0 rounded-2xl md:outline-none mx-auto shadow-2xl md:shadow-none md:before:hidden before:fixed before:bg-gradient-to-b before:from-transparent before:to-slate-950 before:bottom-0 before:left-0 before:h-40 before:w-full">
        <div className='relative w-full h-full'>
        <div id="active-tab" className={TabStyles.activetab} data-index={tabIndex}>
            {/*className="h-10 z-0 bg-primary rounded-xl"*/}
        </div>
        </div>
        <div id="tabs" className="relative z-10 grid grid-cols-3 gap-2 w-full">
            {tabs.map((tab, index) => <>
                <Link href={"/"+tab.label} className={`${(tabIndex == index + 1)?"":"brightness-50"} flex flex-row place-items-center justify-center p-2 transition-all`}>
                    <span className='pr-1 capitalize'>{tab.label}</span>  {tab.icon}
                        
                </Link>
            </>)}
        </div>
    </div>
    </>
}

const tabs: {label: string, icon: ReactNode}[] = [
    {
        label:"timeline",
        icon: <Timeline className="w-6 h-6"/>
    },
    {
        label:"logs",
        icon: <Logs className="w-6 h-6"/>
    },
    {
        label:"discover",
        icon: <Discover className="w-6 h-6"/>
    }
]