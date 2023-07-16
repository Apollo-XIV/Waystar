'use client';
import * as React from "react";
import useFetch from "@/hooks/useFetch";
import { PostType } from "../Post/typedef";
import { PostCtxType } from "@/components/posts/postTypes";


const initObj: PostCtxType = {
    data: [],
    error: undefined,
    loading: false,
    fetchData: undefined,
}


export const PostContext = React.createContext<PostCtxType>(initObj);

interface Props {
    children: React.ReactNode;
}


const PostCtx = ({children}: Props) => {
    
    let {data, error, loading, fetchData} = useFetch('http://localhost:3000/chirp');

    function refreshData() {
        fetchData();
    }

    return (<>
        <PostContext.Provider value={{data, error, loading, fetchData}}>
            {children}
        </PostContext.Provider>
    </>)
}

export default PostCtx;

export const usePostCtx = () => React.useContext(PostContext);