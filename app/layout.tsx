'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const header = (
    <header className="header">
      <div className="left-link">
        <Link href="/professional">
          <p>Professional Blog</p>
        </Link>
      </div>
      <div className="header-image">
        <Link href="/">
          <img src="https://avatars.githubusercontent.com/u/32940624" alt="Logo" />
        </Link>
      </div>
      <div className="right-link">
        <Link href="/personal">
          <p>Personal Blog</p>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Coded by Nil with 🖤</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {pathname === "/" ? null : header}
          {children}
          {pathname === "/" ? null : footer}
        </div>
      </body>
    </html>
  );
}