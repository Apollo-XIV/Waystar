'use client'
import { GBook } from "@/components/utils/types";
import {newLog} from "@/modules/api";
import {useSession} from 'next-auth/react';
import Cog from '@/public/cog.svg';

export default function BookButtons({className, book} : {className?: string, book: GBook}) {
    const title = book.volumeInfo.title;
    const authors = book.volumeInfo.authors;
    const gid = book.id;

    const {status} = useSession();

    if (status != "authenticated") {return null;}

    return <>
    <div className={className + " gap-2 flex"}>
        <div onClick={() => {newLog(title, authors, gid)}} className="h-12 w-40 bg-primary flex place-items-center justify-center rounded-xl cursor-pointer hover:brightness-75 transition-all">
            <p className="text-center">Add to Logs</p>
        </div>
        <div className="w-12 h-12 bg-primary rounded-xl cursor-pointer flex place-items-center justify-center hover:brightness-75 transition-all">
            <Cog className="w-6 h-6"/>
        </div>
    </div>
    </>
}