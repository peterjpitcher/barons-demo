'use client';

import Image from 'next/image';
import Link from 'next/link';
import { quickLinks } from '@/data/siteContent';
import { useSeason } from '@/context/SeasonContext';

export function QuickActions() {
  const { config } = useSeason();

  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-[#d8e1ea] bg-white/95 px-4 py-6 shadow-sm sm:px-6">
      <div className="grid gap-3 md:grid-cols-2">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-[#273640] text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute inset-0">
              <Image
                src={link.image}
                alt={link.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
            </div>
            <div className="relative flex h-full flex-col justify-between p-4">
              <div>
                <span className="block font-display text-lg font-semibold tracking-wide">{link.label}</span>
                <span className="mt-2 block text-sm font-normal text-white/80">{link.description}</span>
              </div>
              <span className="mt-4 inline-flex items-center text-[11px] uppercase tracking-[0.28em] text-white/70">
                Tap to continue
              </span>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-[#637c8c]">Season: {config.label}</p>
    </section>
  );
}
