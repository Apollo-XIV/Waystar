'use server'
import * as dotenv from "dotenv";
import {Log} from "@/modules/entity";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/dist/client/components/headers";
import {callAPI as Test} from "./agnos";

dotenv.config();

const APIURL = (process.env.API_HOST) ? process.env.API_HOST : "http://localhost:3001";

export async function test() {
    console.log(cookies().getAll())
    const token = cookies().get('next-auth.session-token');
    callAPI('/', {
        headers: {
            'Authorization': `Bearer ${token?.value}`
        }
    })
}

function getServerToken() {
    return `Bearer ${cookies().get('next-auth.session-token')?.value}`;
}

export async function serverCallAPI(URI: string, fetchInfo?: RequestInit ) {
    const token = getServerToken()
    fetchInfo = (fetchInfo) ? {...fetchInfo, headers:{'Authorization': token} } : {headers:{'Authorization': token}};
    return await Test(URI, fetchInfo);
}



export async function callAPI(URI: string, fetchInfo?: RequestInit ) {
    const headers = getServerToken()
    let infoHeaders = (fetchInfo?.headers) ? fetchInfo.headers : {};
    infoHeaders = {...infoHeaders, 'Authorization': headers};
    const infoMethod = (fetchInfo?.method) ? fetchInfo.method : 'GET';
    
    let info: RequestInit = {
        method: infoMethod,
        credentials: "include",
        headers: infoHeaders,
    }
    
    if (fetchInfo?.body) {
        info = {...info, body: fetchInfo.body}
    }

    try{
        const response = await fetch(APIURL+URI, info);
        if (!response.ok) {throw response};
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(e);
        return;
    }
}

export async function getUserLogs() {
    const logs: Log[] = await callAPI("/logs/userLogs");
    return logs;
}

export async function newLog(title: string, authors: string[], gid: string) {
    const response = await callAPI("/logs/new", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            book: {
                title: title,
                authors: authors,
                gid: gid,
            }
        })
    })
}