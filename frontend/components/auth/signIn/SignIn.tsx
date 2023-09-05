'use client';
import {signIn} from "next-auth/react";
import Google from "@/public/google.svg"

export default function SignIn({className}:{className?: string}) {
    return <>
        <button onClick={() => signIn("github", {callbackUrl: 'http://localhost:3000/api/auth/signin/github'})} type="button" className={className + " max-w-xs h-12 bg-accent flex place-items-center justify-center cursor-pointer hover:brightness-90 transition-all"}>
            <p className="text-sm text-black font-bold">Sign in with <Google className="w-4 h-4 inline-block ml-1 mb-[0.2rem]"/></p>
        </button>
    </>
}