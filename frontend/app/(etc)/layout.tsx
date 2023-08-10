import React from "react";
import Navbar from '@/components/fixtures/Navbar';
import Logo from "@/public/logo.svg";

export default function Layout({children, modals} : {children: React.ReactNode, modals: React.ReactNode}) {
    return <>
    <Navbar />
    <div className="h-24" />
    <main className="overscroll-none" style={{ minHeight: "calc(100vh - 30rem)" }} >
        {children}
    </main>
    {modals}
    <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
            <Logo  className="w-40 h-24" />
            <p><span className="font-bold italic">Waystar</span><br/>The Online Book Club</p>
        </div> 
        <div>
            <span className="footer-title">Services</span> 
            <a className="link link-hover">Branding</a> 
            <a className="link link-hover">Design</a> 
            <a className="link link-hover">Marketing</a> 
            <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
            <span className="footer-title">Company</span> 
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Jobs</a> 
            <a className="link link-hover">Press kit</a>
        </div> 
        <div>
            <span className="footer-title">Legal</span> 
            <a className="link link-hover">Terms of use</a> 
            <a className="link link-hover">Privacy policy</a> 
            <a className="link link-hover">Cookie policy</a>
        </div>
</footer>
    </>
}