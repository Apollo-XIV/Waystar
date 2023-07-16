'use client';
import {useSession} from "next-auth/react";
import Avatar from "../Avatar";
import SignIn from "../signIn";

type Props = {
    format?: String
}

export default function UserBox({format} : Props) {
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