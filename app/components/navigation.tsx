"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation(){
    const path = usePathname();
    return <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><Link href="/">HOME{path === "/" ? "🔥" : ""}</Link></li>
        <li><Link href="/about-us">About Us{path === "/about-us" ? "🔥" : ""}</Link></li>
        <li><Link href="/movies">Movie{path === "/movies" ? "🔥" : ""}</Link></li>
    </ul>
    </nav>
}