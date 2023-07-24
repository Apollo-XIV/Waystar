'use client';

import { useRef, useState } from "react";

type gBook = {

}


export default function useGBAPI() {

    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [error, setError] = useState<Error | null>();
    const controllerRef = useRef<AbortController|null>();
    
    const search = async (q: string) => {
        if (controllerRef.current) {controllerRef.current.abort();};
        const controller = new AbortController();
        controllerRef.current = controller;

        if (q == null || q == "") {
            setSearchResults([]);
            return;
        };

        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}`, {signal: controllerRef.current?.signal});
            const data = await response.json();
            setSearchResults((data.items) ? data.items : []);
            controllerRef.current = null;
            return data;
        } catch (e:any) {
            setError(e);
        }
        
    }


    return {searchResults, error, search};
}