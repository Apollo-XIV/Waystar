'use client'
import Search from '@/public/search.svg';
import React, { useState, useRef, MutableRefObject } from 'react';
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

        {/* <div onClick={() => {
            setActive((active) ? false : true)
        }} className='text-xs cursor-pointer w-12 bg-primary h-12 rounded-full flex place-items-center justify-center'>toggle</div> */}

        <div 
            tabIndex={0} 
            onFocus={() => {handleFocus()}} 
            onBlur={() => {handleBlur()}} 
            onKeyDown={handleKeyDown} 
            className='rounded-3xl z-20 cursor-pointer overflow-hidden relative min-w-[3rem] min-h-[3rem]'>
                
                <div className='absolute top-0 left-0 flex place-items-center justify-center rounded-full bg-primary w-12 h-12'>
                    <Search className="w-6 h-6" />
                </div>

                <SpecBox show={active}>
                    <div className='bg-slate-900 focus-within:outline outline-1 outline-white w-full -z-10 relative'>
                        <input onChange={handleChange} ref={input} className='z-10 bg-primary w-full h-12 rounded-full pl-12 focus:outline-none absolute' type="text"></input>
                        <div className='max-h-[14rem] p-2 overflow-x-hidden overflow-y-auto no-scrollbar'>
                        <div className='h-12'/>
                        <Results results={searchResults}/>
                        </div>
                    </div>
                </SpecBox>

        </div>
    </>;
}



function Results({results}:{results: GBook[]}) {
    return <>
        {(results.length == 0) && <>
            <p className='p-2 truncate whitespace-nowrap'>Couldn't find any results for this search </p>
        
        </>}
        {results.map((result) => <>
            <BookResult key={result.id} item={result} />
        </>)}
    </>;
}

function BookResult({ item }: { item:GBook }) {
    return <>
        <Link href={`/books/${item.id}`} className='p-2 flex gap-2 hover:bg-primary hover:scale-[1.02] transition-all duration-300 ease-out rounded-xl relative h-14'>
            {(item.volumeInfo.imageLinks) ? <img className='h-10 rounded-none aspect-[10/16]' src={item.volumeInfo.imageLinks.thumbnail} /> :<>
                <div className="h-10 aspect-[10/16] bg-gradient-to-tr from-slate-800 to-slate-400 opacity-50  "></div>
            </>}
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

function SpecBox({children, show, dimensions} : {children: React.ReactNode, show: boolean, dimensions?: string}){
    
    return <>
    
        <div data-show={show} id="exterior container" className={searchStyles.container}>

            <div id="contents" className={searchStyles.contents + " " + ((dimensions) ? dimensions : "max-w-md max-h-[14rem]")}>
                {children}
                <div className='w-[4000px]' />
            </div>

        </div>
    
    </>
}
