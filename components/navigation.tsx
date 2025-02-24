"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../style/components/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "😁" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "😁" : ""}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
