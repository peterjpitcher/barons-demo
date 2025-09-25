'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Menus', href: '/menus' },
  { label: "What's On", href: '/whats-on' },
  { label: 'Private Hire', href: '/private-hire' },
  { label: 'Barons Family', href: '/barons-family' },
  { label: 'Barons Club', href: '/barons-club' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1d2b36] bg-[#273640]/95 text-slate-100 shadow">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-semibold tracking-wide text-white">
          Barons Family · The Cricketers
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-6 text-sm font-medium text-slate-200 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-white ${
                  pathname === item.href ? 'text-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/book"
            className="hidden rounded-full bg-[#c1cbd1] px-4 py-2 text-sm font-semibold text-[#273640] transition hover:bg-[#afbdc4] md:inline-flex"
          >
            Book a Table
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-[#637c8c]/60 px-3 py-2 text-sm font-medium text-slate-200 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-[#1d2b36] bg-[#314759] px-4 py-4 text-sm font-medium text-slate-200 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-2 py-2 text-slate-100 hover:bg-[#3f5a6f]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="mt-2 inline-flex w-full justify-center rounded-full bg-[#c1cbd1] px-4 py-2 text-sm font-semibold text-[#273640] hover:bg-[#afbdc4]"
                onClick={() => setMenuOpen(false)}
              >
                Book a Table
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
