'use client';
import { useSession } from "next-auth/react";

export default function Avatar() {
    const {data: session, status} = useSession();

    if (status != "authenticated" || session.user?.image == null){
        return (<>
        <div className="avatar placeholder">
            <div className="w-16 rounded-lg bg-neutral-focus text-neutral-content">
                <span className="laoding loading-spinner text-primary"></span>
            </div>
        </div>
        </>);
    }
    
    return (<>
        <div className="avatar">
            <div className="max-w-16 w-auto rounded-lg">
        {(status === "authenticated") && <img src={session.user?.image} />}
            </div>
        </div>
        
    </>);

}