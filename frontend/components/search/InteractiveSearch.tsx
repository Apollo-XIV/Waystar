'use client'
import Search from '@/public/search.svg';
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";

export default function InteractiveSearch() {

    const [active, setActive] = useState(false)


    return <>
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
                <AnimatePresence>
                    {(active) && <Results />}
                </AnimatePresence>

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

function Results() {
    const results = ["test", "test"]
    return <>
        <style>{`

        
        
        `}</style>
        <motion.div id="results" className='overflow-y-auto max-h-lg' initial={{height: 0}} exit={{height: 0}}>
            {results.map((result)=><>
                <p className='h-[100px]'>{results}</p>
            </>)}
            <div className='h-[200px]'>

            </div>
        </motion.div>
    </>;
}