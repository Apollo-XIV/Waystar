import { GBook } from "@/components/utils/types"
import Link from "next/link";
import Open from "@/public/open.svg"

export default async function SearchResults({params} : {params: {query: string}}) {
    const results: GBook[] | undefined = await getData(params.query);
    return <>
    <h1 className="font-display text-2xl mt-10">
        Search Results for: "{decodeURI(params.query)}"
    </h1>
    <div className="flex flex-col">

        {(results) && results.map((result) => <>
            <BookResult item={result} key={result.id} />
        </>)}
    
    </div>
    
    </>
}

async function getData(query: string) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    if (!response.ok) {
        return undefined;
    }
    const data = await response.json();
    return data.items;
}

function BookResult({ item }: { item:GBook }) {
    return <>
        <Link href={`/books/${item.id}`} className='p-2 flex gap-2 hover:bg-primary hover:scale-[1.02] transition-all duration-300 ease-out rounded-xl relative h-24'>
            {(item.volumeInfo.imageLinks) && <img className='h-20 rounded-none' src={item.volumeInfo.imageLinks.thumbnail} /> }
            <div key={item.id} className='w-5/6'>
                <p className='text-xl font-serif truncate' >{item.volumeInfo.title}</p>
                {(item.volumeInfo.authors) ? <p className='truncate text-xs italic'>{item.volumeInfo.authors.toString()}</p> : <></> }
            </div>
            <Open className="absolute right-2 my-auto w-6 h-6 translate-y-1/3"/>
        </Link>
    </>
}