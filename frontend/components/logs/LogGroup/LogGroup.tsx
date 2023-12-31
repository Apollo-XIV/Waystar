import {Log, Entry} from '@/modules/entity';
import Link from 'next/link';


export default function LogGroup(log: any) {
    log = log.log
    const entries: Entry[] = log.entries
    console.log(entries.length)
    return <>
    <Link href={"/logs/"+log.id} className="bg-accent cursor-pointer hover:scale-105 transition-all h-64 w-48 p-2 rounded-md flex-col flex">
        <div className="bg-secondary  relative w-full h-full overflow-hidden rounded-sm">
            <p className="text-white z-20 absolute text-md left-2 bottom-1 leading-5 font-bold">{log.book.authors}</p>
            <div className="relative z-10">
                <img src={(log.gid) ? `https://books.google.com/books/publisher/content/images/frontcover/${log.gid}?fife=w400-h600&source=gbs_api` : ""} className="w-full" />
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 right-0 left-0 h-48"></div>
            </div>
        </div>
        <p className="mx-2 mt-1 text-black text-lg leading-5 font-bold">{log.book.title}</p>
        <div className="px-2 flex">
            <span className="text-black text-xs leading-0">pg.{log.index}</span>
            <span className="text-black ml-auto text-xs leading-0">{(log.entries.length == 1) ? log.entries.length + " Entry": log.entries.length + " Entries"}</span>
        </div>
    </Link> 
</>}