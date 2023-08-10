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
        <button onClick={() => signIn("github", {callbackUrl: 'http://localhost:3000/api/auth/signin/github'})} type="button"className="w-48 h-12 bg-accent flex place-items-center justify-center rounded-full cursor-pointer hover:brightness-90 transition-all">
            <p className="text-sm text-black font-bold">Sign in with <Google className="w-4 h-4 inline-block ml-1 mb-[0.2rem]"/></p>
        </button>
    
    </> }
    </>
}

function oub({format} : Props) {
    const {data: session, status} = useSession();

    if (format === "small") {
        return (<>
        <div className="bg-neutral" >
            <div className="flex w-fit flex-row p-2 hover:bg-slate-700 rounded-lg transition-all">
                <div className="w-12 mr-2">
                <Avatar />
                </div>
                <div className="self-center">
                <p className="text-primary text-left">posting as</p>
                <p className="card-title normal-case text-md">{session?.user?.name}</p>
                </div>
            </div>
        </div>
        </>);
    };

    return <>
    <div className="w-96 h-fit card card-compact bg-neutral">
            {(status ==="authenticated") && (<>
            <div tabIndex={0} className="card-body flex-row hover:bg-slate-700 rounded-2xl transition-all">
                    <div className="self-center">
                    <p className="text-primary text-left">signed in as</p>
                    <p className="card-title normal-case">{session.user?.name}</p>
                    </div>
                    <div className="w-16 ml-auto">
                    <Avatar />
                    </div>
            </div>    
            </>
            )}
            {(status ==="unauthenticated") && (<>
            <div tabIndex={0} className="card-body">
                <p>You are not signed in.</p>
                <SignIn />
            </div>
            </>
            )}
            {(status ==="loading") && (<>
            <div tabIndex={0} className="card-body flex-row">
                <span className="loading loading-spinner text-primary"></span>
            </div>
            </>)}
        </div>
        {/* <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-400 rounded-box">
            <div className="bg-base-400">Profile</div>
            <div>Settings</div>
            <div>Sign Out</div>
        </div> */}

    </>

}