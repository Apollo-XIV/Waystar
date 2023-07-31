'use client'
import { getSession } from "next-auth/react";


export default async function Test() {

    const session = await getSession();

    async function fetchSession() {
        const session = await getSession();
        console.log(session);
        return session
    }

    return <>
    <div className="flex place-items-center justify-center">
        <div className="cursor-pointer p-12 w-96 hover:brightness-75 transition-all text-3xl bg-tertiary rounded-xl" onClick={() => testAPI(session)} >Send Req </div>
    </div>
        {/* <div onClick={() => {fetchSession}}>reload session</div> */}
    </>
}

async function testAPI(session: any) {
    const headers = {
        Authorization: `Bearer ${session.accessToken}`
    }
    console.log("sending request");
    fetch("http://localhost:3001", {
        method: 'GET',
        credentials: 'include'
    });


}

