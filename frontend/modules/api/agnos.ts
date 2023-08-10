import * as dotenv from "dotenv";
dotenv.config()

const APIURL = (process.env.API_HOST) ? process.env.API_HOST : "http://localhost:3001";


export async function callAPI(URI: string, fetchInfo?: RequestInit ) {
    let infoHeaders = (fetchInfo?.headers) ? fetchInfo.headers : {};
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