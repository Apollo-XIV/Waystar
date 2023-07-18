'use client';
import { usePostCtx } from "../PostCtx/PostCtx";
import Post from "../Post";

export default function PostArray() {

    const {data, error, loading} = usePostCtx();

    if (error) {
        return <>
        <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error: {error.message}</span>
        </div>
        </>
    }

    if (loading || !data) {
        return <>
        <span className="table m-auto loading loading-spinner text-primary"></span>
        </>
    }

    if (data) {
        return <>
        <div className='flex flex-col justify-center gap-1 content-center'>
            {data?.map((post, index) => (
                <Post key={index} {...{ post }} />
                ))}
        </div>
    </>
    }

    return (<>
        <p>something is amiss {loading} {data} {error}</p>
    </>)
}
