'use client'
import Search from '@/public/search.svg';
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";

export default function InteractiveSearch() {

    const [active, setActive] = useState(false)


    return <>

        <div onClick={() => {setActive((active) ? false : true)}} className='p-5 flex place-items-center justify-center h-12 bg-primary rounded-full'>
            Toggle Focus
        </div>

        <div tabIndex={0} onFocus={() => {setActive(true)}} onBlur={() => {setActive(false)}} className='cursor-pointer bg-black overflow-hidden rounded-3xl'>
                
                <div className='bg-primary flex flex-row rounded-3xl hover:brightness-90 w-fit transition-all'>
                
                    {/* Search Icon */}
                    <div className='w-12 h-12 flex place-items-center justify-center'>
                        <Search className="w-6 h-6"/>
                    </div>

                    {/* Animated Input */}
                    <AnimatePresence>
                        {(active) && <Active />}
                    </AnimatePresence>

                    {/* Search Results */}
                </div>
                <Results show={active}/>

        </div>
    </>;
}

function Active( ) {
    return <>
        <motion.div animate={{width: 400}} initial={{width: 0}} exit={{width: 0}} >
            <input autoFocus className='bg-transparent w-full h-full pl-1 focus:outline-none' type="text"></input>
        </motion.div>
    </>;
}

function Results({show}:{show: Boolean}) {
    const results = ["test", "test"]
    return <>
        <style>{`

            .container {
                display: grid;
                grid-template-rows: 0fr;
                transition: grid-template-rows;
            }

            .container > div {
                overflow: hidden;
            }
        
            .container[data-show="true"] {
                grid-template-rows: 1fr;
            }
        
        `}</style>
        <div id='container' data-show={show} className='w-full'>
            <div id='contents'>
                {results.map((result) => <>
                    <div className='h-[200px] bg-blue-600'>{result}</div>
                </>)}
            </div>
        </div>


    </>;
}