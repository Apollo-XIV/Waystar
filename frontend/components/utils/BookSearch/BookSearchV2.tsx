import useGBAPI from '@/hooks/useGBAPI';
import {GBook} from '@/components/utils/types'
import Link from "next/link";

export default function Search() {

    const {searchResults, search} = useGBAPI();

    const handleChange = async (e: any) => {
        if (!e.target.value) return;
        search(e.target.value);
    }

    return <>
        <div className='w-full max-h-[36vh] border-accent rounded-xl'>

            <input type="text"
                className='w-full h-12 input input-bordered bg-secondary'
                placeholder='Search All...'
                onChange={handleChange}
                />
            <div className='max-h-full overscroll-none rounded-b-xl overflow-y-auto no-scrollbar'>
                <BookResultSection items={searchResults} />
            </div>
        </div>
    </>
}

function BookResultSection({ items } : { items: GBook[] }) {
    return <>
        {(items.length >= 1) && <>
            
            {items.map((item: GBook, index) => <>
                <BookResult key={index} item={item} />
            </>)}
        
        </>}
    </>
}

function BookResult({ item }: { item:GBook }) {
    return <>
        <Link href={`/books/${item.id}`} className='p-2 w-full flex gap-4 bg-secondary hover:bg-primary rounded-none'>
            {(item.volumeInfo.imageLinks) && <img className='h-10 rounded-none' src={item.volumeInfo.imageLinks.thumbnail} /> }
            <div key={item.id} className=''>
                <p >{item.volumeInfo.title}</p>
                {(item.volumeInfo.authors) ? <p className='text-sm'>{item.volumeInfo.authors.toString()}</p> : <></> }
            </div>
        </Link>
    </>
}