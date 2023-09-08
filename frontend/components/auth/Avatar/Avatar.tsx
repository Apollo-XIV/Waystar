'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Avatar() {
    const {data: session, status} = useSession();

    if (status != "authenticated" || session.user?.image == null){
        return (<>
        <div className="avatar placeholder">
            <div className="w-12 rounded-full bg-primary text-neutral-content">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        </div>
        </>);
    }
    
    return (<>
        <div className="avatar">
            <div className="w-12 rounded-full">
        {(status === "authenticated") && <Image alt="Avatar" width={100} height={100} src={session.user?.image} />}
            </div>
        </div>
        
    </>);

}