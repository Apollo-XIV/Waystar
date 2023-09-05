import React from "react";
import Navbar from '@/components/fixtures/Navbar';
import Footer from "@/components/fixtures/Footer";

export default function Layout({children, modals} : {children: React.ReactNode, modals: React.ReactNode}) {
    return <>
    <Navbar />
    <div className="h-24" />
    <main className="overscroll-none" style={{ minHeight: "calc(100vh - 30rem)" }} >
        {children}
    </main>
    {modals}
    <Footer />
    </>
}

