'use client';
import { Session } from "next-auth";
import {SessionProvider} from "next-auth/react";
import React from "react";

type Props = {
    children: React.ReactNode,
    context?: Session
}

export default function AuthCtx({children, context}: Props) {
    return <><SessionProvider session={context}>{children}</SessionProvider></>
}