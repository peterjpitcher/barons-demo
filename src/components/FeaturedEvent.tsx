'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSeason } from '@/context/SeasonContext';
import { sampleEvents } from '@/data/siteContent';

const fallbackImage = 'https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg';
const fallbackAlt = 'Guests celebrating at The Cricketers garden pods';

export function FeaturedEvent() {
  const { season, config } = useSeason();
  const featured = sampleEvents.find((event) => event.seasons.includes(season)) ?? sampleEvents[0];

  if (!featured) {
    return null;
  }

  const imageSrc = featured.image ?? fallbackImage;
  const imageAlt = featured.alt ?? fallbackAlt;

  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border surface-card shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[1.2fr,1fr]">
        <div className="p-6 sm:p-10">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            {config.featuredEventTag}
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-primary sm:text-3xl">{featured.title}</h2>
          <p className="mt-2 text-sm font-semibold text-muted">{featured.date}</p>
          <p className="mt-4 text-sm text-muted">{featured.summary}</p>
          {featured.ctaHref && (
            <Link href={featured.ctaHref} className="button-accent mt-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold">
              {featured.ctaLabel ?? 'Learn more'}
            </Link>
          )}
          <div className="surface-alt-card mt-6 rounded-2xl border p-4 text-sm text-muted">
            <p className="font-semibold text-primary">Seasonal highlights</p>
            <p className="mt-2">Switch the bar above to see how upcoming celebrations change the headline event.</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-subtle">Currently viewing: {config.label}</p>
          </div>
        </div>
        <div className="relative min-h-[260px] lg:min-h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="h-full w-full object-cover"
            priority={season === 'christmas'}
          />
        </div>
      </div>
    </section>
  );
}
