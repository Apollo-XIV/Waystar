import React from "react";
import Navbar from '@/components/fixtures/Navbar';
import Footer from "@/components/fixtures/Footer";

export default function Layout({children, modals} : {children: React.ReactNode, modals: React.ReactNode}) {
    return <>
    <Navbar />
    <div className="h-24" />
    <main className="overscroll-none relative" style={{ minHeight: "calc(100vh - 20rem)" }} >
        {children}
    </main>
    {modals}
    <Footer />
    </>
}

