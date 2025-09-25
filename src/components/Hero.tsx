'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSeason } from '@/context/SeasonContext';

const accentFallback = '#c1cbd1';

type HeroSlide = {
  title: string;
  message: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  alt?: string;
};

export function Hero({ slides }: { slides: HeroSlide[] }) {
  const [primary] = slides;
  const { config, season } = useSeason();
  const accent = config.accent ?? accentFallback;
  const heroImage = season === 'christmas' ? '/hero-cricketers-christmas.jpg' : primary.image;
  const heroAlt =
    season === 'christmas'
      ? 'Festive pod with twinkling lights, garlands and Christmas table setting'
      : primary.alt ?? primary.title;

  return (
    <section className="relative overflow-hidden bg-[#273640] text-white">
      <Image
        src={heroImage}
        alt={heroAlt}
        width={1600}
        height={900}
        className="h-96 w-full object-cover opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#273640]/85 via-[#314759]/70 to-transparent" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-12 sm:px-6 sm:py-16">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-slate-200">{config.label}</span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">{primary.title}</h1>
        <p className="max-w-2xl text-base text-slate-100 sm:text-lg">{primary.message}</p>
        <p className="max-w-2xl text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
          {config.heroTagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primary.ctaHref}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#273640] transition hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            {primary.ctaLabel}
          </Link>
          <Link
            href="/private-hire"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Discover the spaces
          </Link>
        </div>
      </div>
    </section>
  );
}
