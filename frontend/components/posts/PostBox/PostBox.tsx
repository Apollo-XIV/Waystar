'use client';
import { useSession } from "next-auth/react";
import {PostType} from "../Post/typedef"
import { usePostCtx } from "../PostCtx/PostCtx";
import SignIn from "@/components/auth/signIn";
import UserBox from "@/components/auth/UserBox";

const postPost = async (event: React.SyntheticEvent, fetchData: (() => Promise<void>) | undefined) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
        content: {value: string};
    }
    let post: PostType = {
        content: target.content.value,
        author: "blank",
        posted: new Date(),
        likes: 1,
    }

    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
       
    let bodyContent = JSON.stringify({
        "post": {
        "content": target.content.value,
        "author": "AFakeName",
        "posted": new Date(),
        }
    });

    let response;
    try {
        response = await fetch("http://localhost:3000/chirp", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
    } catch (e: any) {
        console.error(e.message);
        return;
    }
    if (response.status != 200) {
        console.log("Oh good heavens! Something must have gone wrong");
        return;
    }
    
    let data = await response.json();
    fetchData!();
    console.log(data);
    
}

export default function PostBox() {
    const {fetchData} = usePostCtx();
    const {data: sesison, status} = useSession();

    if (status === "unauthenticated") {
        return <>
            <h1>Welcome to Not Quite Twitter!</h1>
            <p>Create an account to access the site&#39s full features</p>
            <SignIn />
        </>
    }

    return <>
    <aside className='card card-compact bg-neutral bg-base-100'>
        <div className="card-body flex-row flex-wrap">
        {(status === "loading") && <>
            <span className="loading loading-spinner text-primary"></span>
        </>}
        {(status === "authenticated") && (<>
        <textarea placeholder="Whats on your mind?" form="form" name="content" id="content" className="textarea textarea-primary w-full h-24" />
        <div className="block w-fit">
        <UserBox format={"small"}/>
        </div>
        <form className="block w-fit self-center card-actions ml-auto justify-end" onSubmit={(e) => postPost(e, fetchData)} id="form" >
            <button type="submit" className='btn btn-primary justify-end'>Post!</button>
        </form>
        </>)}
        </div>
    </aside>
    
    </>
}