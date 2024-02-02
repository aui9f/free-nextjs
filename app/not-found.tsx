"use client"
import { usePathname } from "next/navigation"
import Navigation from "./components/navigation"

export default function NotFound(){
    const path = usePathname();
    console.log(path)
    return <div>
        <Navigation/>
        <p>NOT FOUND..</p>
    </div>
}