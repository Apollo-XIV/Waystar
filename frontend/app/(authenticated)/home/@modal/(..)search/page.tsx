'use client';

import Modal from "@/components/Modal";
import useGBAPI from "@/hooks/useGBAPI";
import BookSearch from "@/components/utils/BookSearch"

export default function Search() {

    return <><Modal>
        <div className="absolute inset-0 m-5 flex flex-col">
        <h1 className='font-display text-2xl font-bold text-accent pointer-events-none capitalize'>Search</h1>
        <div className="w-full flex pt-1">
            <BookSearch />
            <button className="btn absolute right-0 rounded-l-none bg-primary btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
        This section here will be used to educate the user on the features of the search tool
        </div>
        </Modal></>
}