'use client';

import { useState } from "react";

type gBook = {

}


export default function useGBAPI() {

    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [error, setError] = useState<Error | null>();

    const search = async (q: string) => {
        if (q == null || q == "") {
            setSearchResults([]);
            return;
        };

        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}`);
        try {
            const data = await response.json();
            setSearchResults((data.items) ? data.items : []);
        } catch (e:any) {
            setError(e);
        }
        
    }


    return {searchResults, error, search};
}