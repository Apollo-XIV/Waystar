'use client';
import {useSession, signIn, signOut} from "next-auth/react";
import Avatar from "../Avatar";
import Google from "@/public/google.svg";

type Props = {
    format?: String
}

export default function UserBox() {

    const {data: session, status} = useSession();

    return <>

    {((status === "authenticated") || (status === "loading") ) ? <> 
        <div className="dropdown dropdown-end cursor-pointer">
            <label tabIndex={0} className="w-12 h-12 bg-primary block rounded-full">
                <Avatar />
            </label> {/* This is where i can put all the logic for loading, can be offloaded into component contents perhaps*/}
            {(status === "authenticated") && <>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-tertiary rounded-box w-52 mt-4">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li className="text-red-500" onClick={() => {signOut()}}><a>Sign Out</a></li>
            </ul>
            </>}
        </div>
    </> : <>
        <button onClick={() => signIn("google", {callbackUrl: 'http://localhost:3000/logs'})} type="button"className="w-48 h-12 bg-accent flex place-items-center justify-center rounded-full cursor-pointer hover:brightness-90 transition-all">
            <p className="text-sm text-black font-bold">Sign in with <Google className="w-4 h-4 inline-block ml-1 mb-[0.2rem]"/></p>
        </button>
    
    </> }
    </>
}