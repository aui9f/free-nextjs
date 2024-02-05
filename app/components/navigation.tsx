import Link from "next/link";

export default function Navigation(){
    return <ul>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/movies">Movie</Link></li>
    </ul>
}