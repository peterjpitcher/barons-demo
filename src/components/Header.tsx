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
    <header
      className="site-header sticky top-0 z-50 border-b shadow"
      style={{ backgroundColor: 'var(--header-bg)', backdropFilter: 'blur(10px)' }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-semibold tracking-wide">
          Barons Family · The Cricketers
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link transition-colors ${pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/book" className="button-accent hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-flex">
            Book a Table
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-sm font-medium md:hidden"
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
          className="border-t border-white/10 px-4 py-4 text-sm font-medium md:hidden"
          style={{ backgroundColor: 'var(--footer-bg)' }}
        >
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link block rounded-md px-2 py-2 ${pathname === item.href ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="button-accent mt-2 inline-flex w-full justify-center rounded-full px-4 py-2 text-sm font-semibold"
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
