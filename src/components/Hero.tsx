'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSeason } from '@/context/SeasonContext';
import { useStyle } from '@/context/StyleContext';

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
  const { theme } = useStyle();
  const heroImage = season === 'christmas' ? '/hero-cricketers-christmas.jpg' : primary.image;
  const heroAlt =
    season === 'christmas'
      ? 'Festive pod with twinkling lights, garlands and Christmas table setting'
      : primary.alt ?? primary.title;

  return (
    <section className="relative overflow-hidden text-white" style={{ backgroundColor: 'var(--header-bg)' }}>
      <Image
        src={heroImage}
        alt={heroAlt}
        width={1600}
        height={900}
        className="h-96 w-full object-cover opacity-70"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${theme.heroOverlay.from} 0%, ${theme.heroOverlay.to} 55%, transparent 100%)`,
        }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-12 sm:px-6 sm:py-16">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-subtle">{config.label}</span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">{primary.title}</h1>
        <p className="max-w-2xl text-base text-subtle sm:text-lg">{primary.message}</p>
        <p className="max-w-2xl text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {config.heroTagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.ctaHref} className="button-accent inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold">
            {primary.ctaLabel}
          </Link>
          <Link href="/private-hire" className="button-outline inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold">
            Discover the spaces
          </Link>
        </div>
      </div>
    </section>
  );
}
