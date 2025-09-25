'use client';

import Image from 'next/image';
import Link from 'next/link';
import { quickLinks } from '@/data/siteContent';
import { useSeason } from '@/context/SeasonContext';
import { useStyle } from '@/context/StyleContext';

export function QuickActions() {
  const { config } = useSeason();
  const { theme } = useStyle();

  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border surface-card px-4 py-6 shadow-sm sm:px-6">
      <div className="grid gap-3 md:grid-cols-2">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute inset-0">
              <Image
                src={link.image}
                alt={link.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="quicklink-overlay absolute inset-0" style={{ background: theme.quickActions.overlay }} />
              <div className="absolute inset-0" style={{ backgroundColor: theme.quickActions.panel }} />
            </div>
            <div
              className="relative flex h-full flex-col justify-between gap-4 p-5 sm:p-6"
              style={{ color: theme.quickActions.text }}
            >
              <div>
                <span className="block font-display text-lg font-semibold tracking-wide">{link.label}</span>
                <span className="mt-2 block text-sm font-normal opacity-80">{link.description}</span>
              </div>
              <span
                className="mt-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.28em]"
                style={{ color: theme.quickActions.text, backgroundColor: theme.quickActions.badge }}
              >
                Tap to continue
              </span>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-accent">Season: {config.label}</p>
    </section>
  );
}
