'use client'
import Search from '@/public/search.svg';
import { useState, useRef, MutableRefObject } from 'react';
import searchStyles from './search.module.css'
import useGBAPI from '@/hooks/useGBAPI';
import {GBook} from '@/components/utils/types'
import Link from 'next/link';
import Open from '@/public/open.svg';
import { useRouter } from 'next/navigation';



export default function InteractiveSearch() {

    const {searchResults, search} = useGBAPI();
    const [active, setActive] = useState(false)
    const input = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleFocus = () => {
        setActive(true);
        if(input.current) {
            input.current.focus()
        }
    }

    const handleBlur = () => {
        setActive(false);
        if (input.current) {
            input.current.value = "";
        }
    }

    const handleChange = async (e: any) => {
        if (!e.target.value) return;
        search(e.target.value);
    }

    const handleKeyDown = async (e: any) => {
        if (e.key == "Enter") {
            router.push("/search/"+input.current?.value)
        }
    }

    return <>
        <div tabIndex={0} onFocus={() => {handleFocus()}} onBlur={() => {handleBlur()}} onKeyDown={handleKeyDown} className='z-20 max-w-md cursor-pointer bg-slate-900 focus-within:outline outline-1 outline-white overflow-hidden rounded-3xl'>
                
                <div className='bg-primary flex flex-row rounded-3xl hover:brightness-90 transition-all w-full'>
                
                    {/* Search Icon */}
                    <div className='w-12 h-12 flex place-items-center justify-center'>
                        <Search className="w-6 h-6"/>
                    </div>

                    {/* Animated Input */}
                    <Active onChange={handleChange} show={active} input={input} />

                    {/* Search Results */}
                </div>
                <Results results={searchResults} show={active}/>

        </div>
    </>;
}

function Active({show, input, onChange}:{show: Boolean, input: MutableRefObject<HTMLInputElement | null>, onChange: (e:any) => Promise<void>}) {
    return <>
        <div id='container-search' data-show={show} className={searchStyles.containerSearch}>
            <div id="contents">
                <input onChange={onChange} ref={input} className='bg-transparent w-full h-full pl-1 focus:outline-none' type="text"></input>
            </div>
        </div>
       
    </>;
}

function Results({show, results}:{show: Boolean, results: GBook[]}) {
    return <>
        <div id='container' data-show={show} className={searchStyles.containerResults}>
            <div className='no-scrollbar'>
                {(results.length == 0) && <>
                    <p>Couldn't find any results for this search </p>
                
                </>}
                {results.map((result) => <>
                    <BookResult key={result.id} item={result} />
                </>)}
            </div>
        </div>


    </>;
}

function BookResult({ item }: { item:GBook }) {
    return <>
        <Link href={`/books/${item.id}`} className='p-2 flex gap-2 hover:bg-primary hover:scale-[1.02] transition-all duration-300 ease-out rounded-xl relative h-14'>
            {(item.volumeInfo.imageLinks) && <img className='h-10 rounded-none' src={item.volumeInfo.imageLinks.thumbnail} /> }
            <div key={item.id} className='w-5/6'>
                <p className='text-md font-sans truncate' >{item.volumeInfo.title}</p>
                {(item.volumeInfo.authors) ? <p className='truncate text-xs italic'>{item.volumeInfo.authors.toString()}</p> : <></> }
            </div>
            <Open className="absolute right-2 my-auto w-6 h-6 translate-y-1/3"/>
        </Link>
    </>
}

/* 

    TODO:
    Need to implement an actual search feature to query the api.
    My current strategy is to query the api on either a pause of 1s or more, or on a space
    To keep the results responsive between queries, i will cull down the list of results 
    by the text input and match percentage to make sure that results are ordered by closeness.


*/
