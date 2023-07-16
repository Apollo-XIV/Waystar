'use client';
import { useEffect, useState } from "react";
import { PostType } from "@/components/posts/Post/typedef";

export default function useFetch(url: string) {
    const [data, setData] = useState<PostType[]>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
            let headersList = {
                "Accept": "*/*",
            }
            setLoading(true);
            let response = await fetch(url, { 
                method: "GET",
                headers: headersList
            });
            try {
                const data = await response.json();
                setData(data);
            } catch (e: any) {
                setError(e);
            } finally {
                setLoading(false);
            }
            setLoading(false);
    };

    useEffect(() => {
        fetchData();
        
    },[url]);
    return {data, error, loading, fetchData}
}