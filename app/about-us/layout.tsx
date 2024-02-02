import Link from "next/link";
import React from "react";

export default function AboutLayout({children}: {children: React.ReactNode}){
    return <>
        <hr />
        <p>[[about-au/layout]]: </p>
        <ul>
            <li><Link href="/about-us/me">ME</Link></li>
            <li><Link href="/about-us/you">YOU</Link></li>
        </ul>
        {children}
        <hr />
    </>
}